export default class Mouse {
  constructor() {
    this.currentEl = null;
  }
  
  onMouseOver(el, closest, cb) {
    el.onmouseover = function (e) {
      if (this.currentEl) return;
      let target = e.target.closest(closest);
      if (!target) return;
      if (!el.contains(target)) return;
      this.currentEl = target;
      cb(this.currentEl);
    }
  }
  
  onMouseOut(el, cb) {
    el.onmouseout = function (e) {
      if (!this.currentEl) return;
      let relatedTarget = e.relatedTarget;
      while (relatedTarget) {
        if (relatedTarget == this.currentEl) return;
        relatedTarget = relatedTarget.parentNode;
      }
      cb(this.currentEl);
      this.currentEl = null;
    }
  }
}