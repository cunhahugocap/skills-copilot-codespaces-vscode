function skillsMember() {
    var skills = {
        name: 'Jhon',
        age: 20,
        skills: ['JavaScript', 'React', 'Node'],
        // Method inside object
        showSkills: function() {
            this.skills.forEach(skill => {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };

    skills.showSkills();
}