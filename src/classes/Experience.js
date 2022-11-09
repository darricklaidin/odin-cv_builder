import uniqid from "uniqid";

class Experience {
  constructor(company="", jobTitle="", city="", country="", startDate="", endDate="") {
    this.id = uniqid();
    this.company = company;
    this.jobTitle = jobTitle;
    this.city = city;
    this.country = country;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export default Experience;