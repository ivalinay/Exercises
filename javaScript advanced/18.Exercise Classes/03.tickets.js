function solve(input, filterCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let tickets = [];
  input.forEach((line) => {
    [destination, price, status] = line.split("|");
    price = Number(price);
    tickets.push(new Ticket(destination, price, status));
  });
  let sorted;
  if (filterCriteria === "destination") {
    sorted = tickets.sort((curr, next) => curr.destination.localeCompare(next.destination));
  } else if (filterCriteria === "price") {
    sorted = tickets.sort((curr, next) => curr.price - next.price);
  } else {
    sorted = tickets.sort((curr, next) => curr.status.localeCompare(next.status));
  }
  return sorted;
}
