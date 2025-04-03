window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('sigilCanvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    function drawSigil() {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.translate(w/2, h/2);
      ctx.strokeStyle = "#f0e68c";
      const symmetry = Math.floor(Math.random() * 4) + 5;
      const angleInc = (2 * Math.PI) / symmetry;
      const shapesCount = Math.floor(Math.random() * 3) + 1;
      for (let s = 0; s < shapesCount; s++) {
        ctx.lineWidth = Math.random() * 2 + 1;
        const r = (Math.random() * 0.6 + 0.3) * Math.min(w, h) / 2;
        if (Math.random() < 0.3) {
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, 2 * Math.PI);
          ctx.stroke();
        } else {
          const angleSpan = (Math.random() * 0.5 + 0.1) * Math.PI;
          for (let i = 0; i < symmetry; i++) {
            ctx.save();
            ctx.rotate(i * angleInc);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(r, 0);
            ctx.lineTo(r * Math.cos(angleSpan), r * Math.sin(angleSpan));
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      ctx.restore();
    }
    drawSigil();
    const regenBtn = document.getElementById('regenerateSigil');
    if (regenBtn) {
      regenBtn.addEventListener('click', drawSigil);
    }
  }
});
