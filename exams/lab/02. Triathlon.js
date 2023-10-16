class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return (`${participantName} has already been added to the list`);
        } else {
            this.participants[participantName] = participantGender;
            return (`A new participant has been added - ${participantName}`);
        }
    }

    completeness(participantName, condition) {
        if (Number(condition) < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        } else {
            let disciplineCount = condition / 30;
            if (disciplineCount < 3) {
                return (`${participantName} could only complete ${Math.trunc(disciplineCount)} of the disciplines`);
            } else {
                let gender = this.participants[participantName];
                let finalist = {};
                delete this.participants[participantName];
                finalist[participantName] = gender;
                this.listOfFinalists.push(finalist);
                return (`Congratulations, ${participantName} finished the whole competition`);
            }
        }
    }

    rewarding(participantName) {
        for (const participant of this.listOfFinalists) {
            let keys = Object.keys(participant);
            let name = keys[0]
            if(name === participantName){
                return (`${participantName} was rewarded with a trophy for his performance`);
            }
        }
        return (`${participantName} is not in the current finalists list`);
    }

    showRecord(criteria){
        
        if(this.listOfFinalists.length == 0){
            return (`There are no finalists in this competition`);
        }
        if(criteria === "male"){
            for (const participant of this.listOfFinalists) {
                let keys = Object.keys(participant);
                let name = keys[0];
                if(participant[name] === criteria){
                   return `${name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
                console.log(name);
            }
        }else if(criteria === "female"){
            for (const participant of this.listOfFinalists) {
                let keys = Object.keys(participant);
                let name = keys[0];
                if(participant[name] === criteria){
                   return `${name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
                console.log(name);
            }
        }else if(criteria === "all"){
            let output = `List of all ${this.competitionName} finalists:`
            for (const participant of this.listOfFinalists) {
                let keys = Object.keys(participant);
                output += `\n`
                let name = keys[0];
                output += `${name}`;
            }
            return output;
        }
        
    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));