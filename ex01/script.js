function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    }
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || typeof hasTicket !== "boolean") {
        return false;
    }
    return age >= 18 && hasTicket;
}

console.log("--- Testing calculateGrade ---");
console.log("Score 95:", calculateGrade(95));   
console.log("Score 89:", calculateGrade(89));   
console.log("Score 90:", calculateGrade(90));   
console.log("Score 0:", calculateGrade(0));     
console.log("Score 100:", calculateGrade(100)); 
console.log("Score -5:", calculateGrade(-5));
console.log("Score 105:", calculateGrade(105));
console.log("Score invalid type:", calculateGrade("90"));

console.log("\n--- Testing checkAccess ---");
console.log("Age 20, Ticket true:", checkAccess(20, true));
console.log("Age 16, Ticket true:", checkAccess(16, true));
console.log("Age 25, Ticket false:", checkAccess(25, false));
