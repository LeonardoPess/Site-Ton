export default function initUpdateEachPlanMenu() {
  const allPlansMenu = document.querySelectorAll('[data-plano]');
  const plansMenuHeader = document.querySelectorAll('.desktop-menu a');

  function update(planName) {
    allPlansMenu.forEach((plan) => {
      const currentPlanValue = plan.getAttribute('data-plano');
      if (planName !== currentPlanValue) {
        plan.classList.remove('selected');
        plan.checked = false;
      }

      if (planName === currentPlanValue) {
        plan.classList.add('selected');
        plan.checked = true;
      }
    });
  }

  function handleClick(e) {
    const planName = e.currentTarget.getAttribute('data-plano');
    update(planName);
  }

  allPlansMenu.forEach((plan) => {
    plan.addEventListener('click', handleClick);
  });

  plansMenuHeader.forEach((plan) => {
    if (plan.classList.contains('selected')) {
      const planName = plan.getAttribute('data-plano');
      update(planName);
    }
  });
}
