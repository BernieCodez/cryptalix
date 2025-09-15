const divider = document.querySelector('.square');
      const wrapper = document.querySelector('.wrapper'); 
      const rect = document.body.getBoundingClientRect(); 

      function updateRotation(clientX, clientY) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const deltaX = clientX - centerX;
          const deltaY = clientY - centerY;

          const rotateY = (deltaX / (rect.width / 2)) * 30;
          const rotateX = -(deltaY / (rect.height / 2)) * 30;

          divider.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.5)`;
        }

      // Update rotation on mouse move
      document.addEventListener('mousemove', (event) => {
          updateRotation(event.clientX, event.clientY);
      });

      // Set initial rotation based on mouse position on load
      window.onload = function () {
          const event = new MouseEvent('mousemove', {
              clientX: window.innerWidth / 2, // Start in center of screen
              clientY: window.innerHeight / 2
          });
          document.dispatchEvent(event);
      };