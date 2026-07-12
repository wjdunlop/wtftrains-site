const situations = {
  before: {
    label: "01 / before travel",
    title: "check the ticket before you change it.",
    copy: "Ticket rules vary by type and seller. If the original service is disrupted, use the disruption route instead of assuming a normal ticket change.",
    link: "guide.html#before"
  },
  now: {
    label: "02 / disruption now",
    title: "pause. confirm. then move.",
    copy: "Check the live board and keep your ticket. If a booked connecting train was delayed or cancelled and you missed the next train, show the full itinerary to staff and ask which next service is valid before boarding.",
    link: "connections.html"
  },
  after: {
    label: "03 / after the journey",
    title: "keep the evidence, then choose a route.",
    copy: "A disruption refund and delay compensation are different routes. The guide helps you identify the right one before you start a claim.",
    link: "guide.html#after"
  },
  assist: {
    label: "04 / assistance",
    title: "your safe journey comes first.",
    copy: "Tell station staff what you need and use Passenger Assist or the operator’s accessible-travel information when disruption affects your plan.",
    link: "guide.html#assist"
  }
};

const answer = document.querySelector("#answer");
const heroAnswer = document.querySelector("#hero-answer");
const render = (prefix, item) => {
  document.querySelector(`#${prefix}-label`).textContent = item.label;
  document.querySelector(`#${prefix}-title`).textContent = item.title;
  document.querySelector(`#${prefix}-copy`).textContent = item.copy;
  document.querySelector(`#${prefix}-link`).href = item.link;
};
document.querySelectorAll("[data-situation]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = situations[button.dataset.situation];
    render("answer", item);
    answer.hidden = false;
    if (button.classList.contains("flow-node")) {
      render("hero-answer", item);
      heroAnswer.hidden = false;
      heroAnswer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      answer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
});
document.querySelector("#close-answer").addEventListener("click", () => { answer.hidden = true; });
