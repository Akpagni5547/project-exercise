document.addEventListener('DOMContentLoaded', (event) => {
    function handleDragStart(e) {
        this.style.opacity = "0.4";

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", this.innerHTML);
      }

      function handleDragEnd(e) {
        this.style.opacity = "1";
      }

      function handleDragOver(e) {
        e.preventDefault();
        return false;
      }

      function handleDragEnter(e) {
        this.classList.add("over");
      }

      function handleDragLeave(e) {
        this.classList.remove("over");
      }

      function handleDrop(e) {
        e.stopPropagation(); // stops the browser from redirecting.
        if (dragSrcEl !== this) {
          dragSrcEl.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData("text/html");
        }

        return false;
      }
      var dragSrcEl;

      const sources = document.getElementsByClassName("alphabet");

      for (const source of sources) {
        source.classList.remove('over');
      }

      for (const source of sources) {
        source.addEventListener("dragstart", handleDragStart);
        source.addEventListener("dragover", handleDragOver);
        source.addEventListener("dragenter", handleDragEnter);
        source.addEventListener("dragleave", handleDragLeave);
        source.addEventListener("dragend", handleDragEnd);
        source.addEventListener("drop", handleDrop);
      }
})


