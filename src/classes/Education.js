import uniqid from "uniqid";

class Education {
  constructor(university="", degree="", city="", country="", startDate="", endDate="") {
    this.id = uniqid();
    this.university = university;
    this.degree = degree;
    this.city = city;
    this.country = country;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export default Education;