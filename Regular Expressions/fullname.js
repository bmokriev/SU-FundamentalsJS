function fullName(t) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let test = t.match(pattern)
    console.log(test.join(' '));
}
fullName('ivan ivanov, Ivan ivanov, ivan Ivanov, Test Testov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov')