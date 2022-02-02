import { registerDecorators as _registerDecorators } from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
export { Direction } from '/1/module/esm/0/l/en-US/mi/lightning%2FpositionLibrary%23direction%2Fv%2F1_14_3-alpha/latest/lightning_positionLibrary_direction.js';
import { Constraint } from '/1/module/esm/0/l/en-US/mi/lightning%2FpositionLibrary%23constraint%2Fv%2F1_14_3-alpha/latest/lightning_positionLibrary_constraint.js';
import { checkFlipPossibility, Direction, flipDirection, mapToHorizontal, mapToVertical, normalizeDirection } from '/1/module/esm/0/l/en-US/mi/lightning%2FpositionLibrary%23direction%2Fv%2F1_14_3-alpha/latest/lightning_positionLibrary_direction.js';
import { createProxy } from '/1/module/esm/0/l/en-US/mi/lightning%2FpositionLibrary%23elementProxyCache%2Fv%2F1_14_3-alpha/latest/lightning_positionLibrary_elementProxyCache.js';
import { getPositionTarget, getScrollableParent, getScrollableParentFromEventPath, isDomNode, normalizeElement, normalizePosition, requestAnimationFrameAsPromise, WindowManager } from '/1/module/esm/0/l/en-US/mi/lightning%2FpositionLibrary%23util%2Fv%2F1_14_3-alpha/latest/lightning_positionLibrary_util.js';
import { addConstraints, bindEvents, nextIndex, rebaseIndex, reposition, scheduleReposition } from '/1/module/esm/0/l/en-US/mi/lightning%2FpositionLibrary%23reposition%2Fv%2F1_14_3-alpha/latest/lightning_positionLibrary_reposition.js';
import { assert } from '/1/module/esm/0/l/en-US/mi/lightning%2FutilsPrivate%2Fv%2F1_14_3-alpha/latest/lightning_utilsPrivate.js';
import { Relationship } from '/1/module/esm/0/l/en-US/mi/lightning%2FpositionLibrary%23relationship%2Fv%2F1_14_3-alpha/latest/lightning_positionLibrary_relationship.js';
import { OverlayDetector } from '/1/module/esm/0/l/en-US/mi/lightning%2FpositionLibrary%23overlayDetector%2Fv%2F1_14_3-alpha/latest/lightning_positionLibrary_overlayDetector.js';
const DEFAULT_MIN_HEIGHT = '1.875rem';

function setupObserver(config, scrollableParent) {
  const observedElement = config.element;
  let observer = null;

  if (WindowManager.MutationObserver && !observedElement.isObserved) {
    observer = new WindowManager.MutationObserver(() => {});
    observer.observe(observedElement, {
      attributes: true,
      subtree: true,
      childList: true
    });
    observedElement.isObserved = true;
  }

  if (scrollableParent) {
    scrollableParent.addEventListener('scroll', scheduleReposition);

    config.removeListeners = () => {
      scrollableParent.removeEventListener('scroll', scheduleReposition);
    };
  }

  return observer;
}

function validateConfig(config) {
  assert(config.element && isDomNode(config.element), 'Element is undefined or missing, or not a Dom Node');
  assert(config.target && (WindowManager.isWindow(config.target) || isDomNode(config.target)), 'Target is undefined or missing');
}

function createRelationship(originalConfig, disableReposition, eventComposedPath) {
  bindEvents();
  let scrollableParent = getScrollableParent(getPositionTarget(originalConfig.target), WindowManager.window);

  if (!scrollableParent && eventComposedPath) {
    scrollableParent = getScrollableParentFromEventPath(eventComposedPath);
  }

  const config = normalizeConfig(scrollableParent, originalConfig);

  if (config.alignWidth && config.element.style.position === 'fixed') {
    config.element.style.width = config.target.getBoundingClientRect().width + 'px';
  }

  const constraintList = []; // This observer and the test for scrolling children
  // is so that if a panel contains a scroll we do not
  // proxy the events to the "parent"  (actually the target's parent)

  const observer = setupObserver(config, scrollableParent);

  if (config.appendToBody) {
    document.body.appendChild(config.element);
  }

  config.element = createProxy(config.element);
  config.target = createProxy(config.target); // Add horizontal constraint.

  const horizontalConfig = Object.assign({}, config);

  if (horizontalConfig.padLeft !== undefined) {
    horizontalConfig.pad = horizontalConfig.padLeft;
  } // Add vertical constraint.


  const verticalConfig = Object.assign({}, config);

  if (verticalConfig.padTop !== undefined) {
    verticalConfig.pad = verticalConfig.padTop;
  }

  constraintList.push(new Constraint(mapToHorizontal(config.align.horizontal), horizontalConfig));
  constraintList.push(new Constraint(mapToVertical(config.align.vertical), verticalConfig));
  const autoShrink = config.autoShrink.height || config.autoShrink.width;

  if (config.scrollableParentBound && scrollableParent) {
    const parent = normalizeElement(scrollableParent);
    const boxConfig = {
      element: config.element,
      enabled: config.enabled,
      target: createProxy(parent),
      align: {},
      targetAlign: {},
      pad: 3,
      boxDirections: {
        top: true,
        bottom: true,
        left: true,
        right: true
      }
    };

    if (autoShrink) {
      const style = boxConfig.element.getNode().style;

      if (!style.minHeight) {
        style.minHeight = config.minHeight;
        boxConfig.element._removeMinHeight = true;
      }

      boxConfig.boxDirections = {
        top: !!config.autoShrink.height,
        bottom: !!config.autoShrink.height,
        left: !!config.autoShrink.width,
        right: !!config.autoShrink.width
      };
      constraintList.push(new Constraint('shrinking box', boxConfig));
    } else {
      constraintList.push(new Constraint('bounding box', boxConfig));
    }
  }

  if (config.keepInViewport) {
    constraintList.push(new Constraint('bounding box', {
      element: config.element,
      enabled: config.enabled,
      target: createProxy(window),
      align: {},
      targetAlign: {},
      pad: 3,
      boxDirections: {
        top: true,
        bottom: true,
        left: true,
        right: true
      }
    }));
  }

  addConstraints(constraintList);

  if (!disableReposition) {
    reposition();
  }

  return new Relationship(config, constraintList, scrollableParent, observer);
}

function isAutoFlipHorizontal(config) {
  return config.autoFlip || config.autoFlipHorizontal;
}

function isAutoFlipVertical(config) {
  return config.autoFlip || config.autoFlipVertical;
}

function normalizeAlignments(config, flipConfig) {
  const align = {
    horizontal: config.align.horizontal,
    vertical: config.align.vertical
  };
  const targetAlign = {
    horizontal: config.targetAlign.horizontal,
    vertical: config.targetAlign.vertical
  }; // Horizontal alignments flip for RTL languages.

  if (document.dir === 'rtl') {
    align.horizontal = flipDirection(align.horizontal);
    targetAlign.horizontal = flipDirection(targetAlign.horizontal);
  } // When using the autoFlip flags with center alignment, we change the element alignment to fit
  // within the viewport when it's detected that it overflows the edge of the viewport.


  let vFlip = false;

  if (isAutoFlipVertical(config)) {
    if (align.vertical === Direction.Bottom) {
      vFlip = !flipConfig.hasSpaceAbove && flipConfig.hasSpaceBelow;
    } else if (align.vertical === Direction.Top) {
      vFlip = flipConfig.hasSpaceAbove && !flipConfig.hasSpaceBelow;
    } else if (align.vertical === Direction.Center) {
      if (flipConfig.centerOverflow.top && !flipConfig.centerOverflow.bottom) {
        align.vertical = targetAlign.vertical = Direction.Top;
      } else if (flipConfig.centerOverflow.bottom && !flipConfig.centerOverflow.top) {
        align.vertical = targetAlign.vertical = Direction.Bottom;
      }
    }
  }

  let hFlip = false;

  if (isAutoFlipHorizontal(config)) {
    if (align.horizontal === Direction.Left) {
      hFlip = flipConfig.shouldAlignToRight && !flipConfig.shouldAlignToLeft;
    } else if (align.horizontal === Direction.Right) {
      hFlip = flipConfig.shouldAlignToLeft && !flipConfig.shouldAlignToRight;
    } else if (align.horizontal === Direction.Center) {
      if (flipConfig.centerOverflow.left && !flipConfig.centerOverflow.right) {
        align.horizontal = targetAlign.horizontal = Direction.Left;
      } else if (flipConfig.centerOverflow.right && !flipConfig.centerOverflow.left) {
        align.horizontal = targetAlign.horizontal = Direction.Right;
      }
    }
  }

  return {
    align: {
      horizontal: hFlip ? flipDirection(align.horizontal) : normalizeDirection(align.horizontal, Direction.Left),
      vertical: vFlip ? flipDirection(align.vertical) : normalizeDirection(align.vertical, Direction.Top)
    },
    targetAlign: {
      horizontal: hFlip ? flipDirection(targetAlign.horizontal) : normalizeDirection(targetAlign.horizontal, Direction.Left),
      vertical: vFlip ? flipDirection(targetAlign.vertical) : normalizeDirection(targetAlign.vertical, Direction.Bottom)
    }
  };
}

function normalizeConfig(parent, config) {
  config.align = config.align || {};
  config.targetAlign = config.targetAlign || {};
  const flipConfig = checkFlipPossibility(config.overlay.isInside ? null : parent, // For modal/panel, dialog/popover, should always popup.
  // And consider window is the viewport, ignore scrollable parent.
  // Otherwise, when stay on flat page, should use scrollable parent as viewpoint.
  config.element, config.target, config.leftAsBoundary);
  const {
    align,
    targetAlign
  } = normalizeAlignments(config, flipConfig); // When inside modal, element may expand out of the viewport and be cut off.
  // So if inside modal, and don't have enough space above or below, will add bounding box rule.
  // IMPORTANT: config.isInsideModal is for element, not target.

  if (config.isInsideModal && !flipConfig.hasSpaceAbove && !flipConfig.hasSpaceBelow) {
    config.scrollableParentBound = true;
  }

  return {
    target: config.target,
    element: config.element,
    align,
    targetAlign,
    alignWidth: config.alignWidth,
    scrollableParentBound: config.scrollableParentBound,
    keepInViewport: config.keepInViewport,
    pad: config.pad,
    padTop: config.padTop,
    padLeft: config.padLeft,
    autoShrink: {
      height: config.autoShrink || config.autoShrinkHeight,
      width: config.autoShrink || config.autoShrinkWidth
    },
    minHeight: config.minHeight || DEFAULT_MIN_HEIGHT
  };
}

function toElement(root, target) {
  if (target && typeof target === 'string') {
    return root.querySelector(target);
  } else if (target && typeof target === 'function') {
    return target();
  }

  return target;
}

export function startPositioning(root, config, disableReposition) {
  assert(root, 'Root is undefined or missing');
  assert(config, 'Config is undefined or missing');
  const node = normalizeElement(root);
  const target = toElement(node, config.target);
  const element = toElement(node, config.element); // when target/element is selector, there is chance, dom isn't present anymore.

  if (!target || !element) {
    return null;
  }

  config.target = normalizeElement(target);
  config.element = normalizeElement(element); // Check if element is inside modal overlay.

  const result = new OverlayDetector(config.element); // IMPORTANT: config.isInsideModal will be used to decide if element should use modal as viewport.

  config.isInsideModal = result.isInsideModal; // stackManager will increase the zIndex too.
  // if detect inside modal, read modal zIndex and rebase to it.

  if (config.isInsideModal && result.overlay) {
    const index = parseInt(result.overlay.style.zIndex, 10);
    rebaseIndex(index);
  } // Also should check if target inside modal too.


  const targetResult = new OverlayDetector(config.target); // if detect target is inside modal, read modal zindex and rebase to it.
  // for example, lightning-helptext, lightning-primitive-bubble by default is global.
  // So it won't be in any modal. For other use case, target and element is inside same modal.

  if (targetResult.isInsideModal && targetResult.overlay) {
    const index = parseInt(targetResult.overlay.style.zIndex, 10);
    rebaseIndex(index);
  } // Element absolute / fixed must be set prior to getBoundingClientRect call or
  // the scrollable parent (usually due to uiModal/uiPanel) will push the page down.


  const overlayCheck = normalizePosition(config.element, result, nextIndex(), config.target, config.alignWidth);
  config.element = overlayCheck.element;
  config.overlay = overlayCheck.overlay;
  validateConfig(config);
  const relationship = createRelationship(config, disableReposition); // Scroll regions within a shadowRoot are skipped while traversing parent nodes.
  // Components that contain a scroll region in their template
  // must handle the `privatescrollablecontainer` event and execute the callback with the event path.
  // The event path is used to find the scrollable parent and the constraints
  // for positioning are set according to this element.
  // Usage in parent component with scroll region:
  // addEventListener('privatescrollablecontainer', (event) => {
  //     const { callback } = event.detail;
  //     callback(event.composedPath());
  //     event.stopPropagation();
  // });

  root.dispatchEvent(new CustomEvent('privatescrollablecontainer', {
    composed: true,
    bubbles: true,
    detail: {
      callback: eventComposedPath => {
        var updatedReltnWrtoScrollParent = createRelationship(config, disableReposition, eventComposedPath);
        relationship.config.align.horizontal = updatedReltnWrtoScrollParent.config.align.horizontal;
        relationship.config.align.vertical = updatedReltnWrtoScrollParent.config.align.vertical;
      }
    }
  }));
  return relationship;
}
export function stopPositioning(relationship) {
  if (relationship) {
    relationship.destroy();
  }
}
export class AutoPosition {
  constructor(root) {
    this._autoPositionUpdater = null;
    this._root = root;
  }

  start(config) {
    return requestAnimationFrameAsPromise().then(() => {
      let promise = Promise.resolve();

      if (!this._autoPositionUpdater) {
        this._autoPositionUpdater = startPositioning(this._root, config);
      } else {
        promise = promise.then(() => {
          return this._autoPositionUpdater.reposition();
        });
      }

      return promise.then(() => {
        return this._autoPositionUpdater;
      });
    });
  }

  stop() {
    if (this._autoPositionUpdater) {
      stopPositioning(this._autoPositionUpdater);
      this._autoPositionUpdater = null;
    }

    return Promise.resolve();
  }

}

_registerDecorators(AutoPosition, {
  fields: ["_autoPositionUpdater"]
});