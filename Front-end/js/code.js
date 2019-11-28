let selectedLanguage;

/**
 * Retorna o tamanho do arquivo
 *
 * @author Guilherme da Silva Martin
 */
function getFileSize() {
    let text = codeEditor.getValue();

    return text.length;
}

/**
 * Retorna o total de linhas no editor
 *
 * @author Guilherme da Silva Martin
 */
function getTotalLines() {
    const text = codeEditor.getValue();
    const lines = (text.match(/\n/g) || '').length + 1;

    return lines;
}

/**
 * Retorna a linguagem que o code utiliza
 * 
 * @author Guilherme da Silva Martin
 */
function getSelectedLanguage() {
    return selectedLanguage;
}

/**
 * Seta a linguagem utilizada do code
 * 
 * @author Guilherme da Silva Martin
 * @param {*} language 
 */
function setLanguage(language) {
    let selectedText = $(language).find('option:selected').text();
    let selectedValue = $(language).find('option:selected').val();

    selectedLanguage = selectedText;
    changeCodeMirrorMode(selectedValue);
    $('#code-language').text(selectedText);
}

/**
 * Executa assim que a página está pronta
 * 
 * @author Guilherme da Silva Martin
 */
$(document).ready(() => {
    $('.modal').modal();
    $('select').formSelect();
});