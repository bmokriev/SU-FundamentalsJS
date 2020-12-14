function extrFile(input) {
    let indexFile = input.lastIndexOf('\\')
    let file = input.substring(indexFile + 1)

    let indexDot = file.lastIndexOf('.')
    let fileExt = file.substring(indexDot + 1)
    let fileName = file.substring(0, indexDot)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}
extrFile('C:\\Internal\\training-internal\\Template.pptx')
extrFile('C:\\Projects\\Data-Structures\\Linked.List.cs')