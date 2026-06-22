    // Gather all details elements across all nested tiers
    const allAccordions = document.querySelectorAll("details");

    allAccordions.forEach((targetDetails) => {
      targetDetails.addEventListener("toggle", function() {
        // Run only if the menu item is opened
        if (this.open) {
          // Find siblings on the exact same nesting tier level
          const siblings = this.parentElement.querySelectorAll(`:scope > details`);
          
          siblings.forEach((sibling) => {
            if (sibling !== this) {
              sibling.open = false; // Close other open sibling lists
            }
          });
        }
      });
    });