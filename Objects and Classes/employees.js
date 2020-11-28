function employees(emplArr) {
    let employees = {};

    class Empl {
        constructor(name) {
            this.name = name,
                this.num = name.length
        }

        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.num}`);
        }
    }

    emplArr = emplArr.map(x => { return new Empl(x) })
        .forEach(el => {
            el.print()
        });


}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
