class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }
  addParticipant(name, gender) {
    if (this.participants.hasOwnProperty(name)) {
      return `${name} has already been added to the list`;
    }
    this.participants[name] = gender;
    return `A new participant has been added - ${name}`;
  }
  completeness(name, condition) {
    if (!this.participants.hasOwnProperty(name)) {
      throw new Error(`${name} is not in the current participants list`);
    }
    if (condition < 30) {
      throw new Error(
        `${name} is not well prepared and cannot finish any discipline`
      );
    }
    if (condition < 90) {
      return `${name} could only complete ${Math.floor(
        condition / 30
      )} of the disciplines`;
    }
    this.listOfFinalists.push([name, this.participants[name]]);
    delete this.participants[name];
    return `Congratulations, ${name} finished the whole competition`;
  }
  rewarding(name) {
    let isFound = this.listOfFinalists.find((el) => el[0] === name);
    if (!isFound) {
      return `${name} is not in the current finalists list`;
    }
    return `${name} was rewarded with a trophy for his performance`;
  }
  showRecord(criteria) {
    if (this.listOfFinalists.length === 0) {
      return `There are no finalists in this competition`;
    }

    if (criteria === "all") {
      let text = `List of all ${this.competitionName} finalists:`;
      this.listOfFinalists.sort((a, b) => a[0].localeCompare(b[0]));
      this.listOfFinalists.forEach((el) => (text += `\n${el[0]}`));
      return text;
    }

    let sortedFinalists = this.listOfFinalists.filter(
      (el) => el[1] === criteria
    );
    if (sortedFinalists.length === 0) {
      return `There are no ${criteria}'s that finished the competition`;
    }
    return `${this.listOfFinalists[0][0]} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
  }
}

const contest = new Triathlon("Dynamos");

console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
