/*const hex_0 = array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+');

const hex_1 = array('+', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', 'a');

const hex_2 = array('+', '_', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 'a', 'b');

const hex_3 = array('+', '_', ')', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"',
    '[', ']', '\\', '{', '}', '|', '-', '=', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(',
    'a', 'b', 'c');

const hex_4 = array('+', '_', ')', '(', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', '!', '@', '#', '$', '%', '^', '&', '*', 'a', 'b', 'c', 'd');

const hex_5 = array('+', '_', ')', '(', '*', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', '!', '@', '#', '$', '%', '^', '&', 'a', 'b', 'c', 'd', 'e');

const hex_6 = array('+', '_', ')', '(', '*', '&', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', '!', '@', '#', '$', '%', '^', 'a', 'b', 'c', 'd', 'e', 'f');

const hex_7 = array('+', '_', ')', '(', '*', '&', '^', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', '!', '@', '#', '$', '%', 'a', 'b', 'c', 'd', 'e', 'f', 'g');

const hex_8 = array('+', '_', ')', '(', '*', '&', '^', '%', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', '!', '@', '#', '$', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');

const hex_9 = array('+', '_', ')', '(', '*', '&', '^', '%', '$', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', '!', '@', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i');

const hex_a = array('+', '_', ')', '(', '*', '&', '^', '%', '$', '#', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t', ' ', '8',
    '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|', '-', '=',
    '`', '~', '!', '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j');

const hex_b = array('+', '_', ')', '(', '*', '&', '^', '%', '$', '#', '@', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', '!', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k');

const hex_c = array('+', '_', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', '~', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l');

const hex_d = array('+', '_', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!', '~', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm');

const hex_e = array('+', '_', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!', '~', '`', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', '=', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n');

const hex_f = array('+', '_', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!', '~', '`', '=', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', ' ', '\n', '\t',
    ' ', '8', '9', '\,', '.', '/', '<', '>', '?', ';', '\'', ':', '\"', '[', ']', '\\', '{', '}', '|',
    '-', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o');*/


function fuckZuck() {
    var copyText = document.getElementById("textInput");

    var result = alphaToPhonetic(copyText.value);

    copyText.value = copyToClipboard(result);
}

function clearText() {
    //Clears the text area
    textClear = document.getElementById("textInput").value = '';
    //Set the focus in the text area
    textClear = document.getElementById("textInput").select();
}

function alphaToPhonetic(alpha) {
    //Holds the ciphered text
    var strText = '';
    let i;
    //Loops through entire string chracter by character
    for (i of alpha) {
        switch (i) {
            case 'a':
                strText += 'alpha ';
                break;
            case 'b':
                strText += 'bravo ';
                break;
            case 'c':
                strText += 'charlie ';
                break;
            case 'd':
                strText += 'delta ';
                break;
            case 'e':
                strText += 'echo ';
                break;
            case 'f':
                strText += 'foxtrot ';
                break;
            case 'g':
                strText += 'golf ';
                break;
            case 'h':
                strText += 'hotel ';
                break;
            case 'i':
                strText += 'india ';
                break;
            case 'j':
                strText += 'juliet ';
                break;
            case 'k':
                strText += 'kilo ';
                break;
            case 'l':
                strText += 'lima ';
                break;
            case 'm':
                strText += 'mike ';
                break;
            case 'n':
                strText += 'november ';
                break;
            case 'o':
                strText += 'oscar ';
                break;
            case 'p':
                strText += 'papa ';
                break;
            case 'q':
                strText += 'qubec ';
                break;
            case 'r':
                strText += 'romeo ';
                break;
            case 's':
                strText += 'sierra ';
                break;
            case 't':
                strText += 'tango ';
                break;
            case 'u':
                strText += 'unifom ';
                break;
            case 'v':
                strText += 'victor ';
                break;
            case 'w':
                strText += 'whiskey ';
                break;
            case 'x':
                strText += 'xray ';
                break;
            case 'y':
                strText += 'yanky ';
                break;
            case 'z':
                strText += 'zulu ';
                break;
            case '0':
                strText += 'zuluechoromeooscar ';
                break;
            case '1':
                strText += 'oscarnovemberecho ';
                break;
            case '2':
                strText += 'tanowhiskeyoscar ';
                break;
            case '3':
                strText += 'tangohotelromeoechoecho ';
                break;
            case '4':
                strText += 'foxtrotoscaruniformromeo ';
                break;
            case '5':
                strText += 'foxtrotindiavictorecho ';
                break;
            case '6':
                strText += 'sieraindiaexray ';
                break;
            case '7':
                strText += 'sieraechovictorechonovember ';
                break;
            case '8':
                strText += 'echoindiagolfhoteltango ';
                break;
            case '9':
                strText += 'novemberinianovemberecho ';
                break;
            case '\n':
                strText += 'novemberechowhiskeylimaindianovemberecho ';
                break;
            case '\t':
                strText += 'tangoalphabravo ';
                break;
            case ' ':
                strText += 'sierapapaalphacharlieecho ';
                break;
            case '\,':
                strText += 'charlieoscarmikemikealpha ';
                break;
            case '.':
                strText += 'papaechoromeoindiaoscardelta ';
                break;
            case '/':
                strText += 'foxtrotoscarromeowhiskeyalpharomeodeltasieralimaalphasierahotel ';
                break;
            case '<':
                strText += 'limaechosierasieratangohotelalphanovember ';
                break;
            case '>':
                strText += 'golfromeoechoalphatangoerchoromeotangohotelalphanovember ';
                break;
            case '?':
                strText += 'qubecuniformechosieratangoindiaoscarnovembermikealpharomeokilo ';
                break;
            case ';':
                strText += 'sieraechomikeindiacharlieoscarlimaoscarnovember ';
                break;
            case ':':
                strText += 'charlieoscarlimaoscarnovember ';
                break;
            case '\'':
                strText += 'sieraindianovebergolflimaechoqubecuniformoscartangoecho ';
                break;
            case 'd\"':
                strText += 'deltaoscaruniformbravolimeechoqubecuniformoscartangoecho ';
                break;
            case '[':
                strText += 'limaechofoxtrottangobravoromeoalphacharliekiloechotango ';
                break;
            case ']':
                strText += 'romeoindiagolfhoteltangobravoromeoalphacharliekiloechotango ';
                break;
            case '\\':
                strText += 'bravoalphacharliekilosieralimaalphasierahotel ';
                break;
            case '{':
                strText += 'limaechofoxtrottangobravoromeoalphacharlieecho ';
                break;
            case '}':
                strText += 'romeoindiagolfhoteltangobravoromeoalphacharlieecho ';
                break;
            case '|':
                strText += 'papaindiapapaecho ';
                break;
            case '-':
                strText += 'mikeindianovemberuniformsiera ';
                break;
            case '=':
                strText += 'echoqubecuniformalphalimasiera ';
                break;
            case '`':
                strText += 'bravoalphacharliekilotangoindiachaliekilo ';
                break;
            case '~':
                strText += 'tangoindialimadeltaalpha ';
                break;
            case '!':
                strText += 'echoxraycharlielimaalphamikealphatangoindiaoscarnovemberpapaoscarindianovembertango ';
                break;
            case '@':
                strText += 'alphatangosieraindiagolfnovember ';
                break;
            case '#':
                strText += 'papaoscaruniformnovemberdeltasieraindiagolfnovember ';
                break;
            case '$':
                strText += 'deltaoscarlimalimaalpharomeosieraindiagolfnovember ';
                break;
            case '%':
                strText += 'papaechoromeocharlieechonovembertangosieraindiagolfnovember ';
                break;
            case '^':
                strText += 'charliealpharomeoechotango ';
                break;
            case '&':
                strText += 'alphamikepapaechoromeosieranovemberdelta ';
                break;
            case '*':
                strText += 'alphasieratangoechoromeoindiasierakilo ';
                break;
            case '(':
                strText += 'limaechofoxtrotpapaalpharomeoechonovember ';
                break;
            case ')':
                strText += 'romeoindiagolfhoteltangopapaalpharomeoechonovember ';
                break;
            case '_':
                strText += 'uniformnovemberdeltaechoromeosieracharlieoscarromeoecho ';
                break;
            case '+':
                strText += 'papalimauniformsiera ';
                break;
            case 'A':
                strText += 'Alpha ';
                break;
            case 'B':
                strText += 'Bravo ';
                break;
            case 'C':
                strText += 'Charlie ';
                break;
            case 'D':
                strText += 'Delta ';
                break;
            case 'E':
                strText += 'Echo ';
                break;
            case 'F':
                strText += 'Foxtrot ';
                break;
            case 'G':
                strText += 'Golf ';
                break;
            case 'H':
                strText += 'Hotel ';
                break;
            case 'I':
                strText += 'India ';
                break;
            case 'J':
                strText += 'Juliet ';
                break;
            case 'K':
                strText += 'Kilo ';
                break;
            case 'L':
                strText += 'Lima ';
                break;
            case 'M':
                strText += 'Mike ';
                break;
            case 'N':
                strText += 'November ';
                break;
            case 'O':
                strText += 'Oscar ';
                break;
            case 'P':
                strText += 'Papa ';
                break;
            case 'Q':
                strText += 'Qubec ';
                break;
            case 'R':
                strText += 'Romeo ';
                break;
            case 'S':
                strText += 'Sierra ';
                break;
            case 'T':
                strText += 'Tango ';
                break;
            case 'U':
                strText += 'Unifom ';
                break;
            case 'V':
                strText += 'Victor ';
                break;
            case 'W':
                strText += 'Whiskey ';
                break;
            case 'X':
                strText += 'Xray ';
                break;
            case 'Y':
                strText += 'Yanky ';
                break;
            case 'Z':
                strText += 'Zulu ';
                break;
            default:
                break;
        }
    }
    return strText;
}

function unFuckZuck() {
    var copyText = document.getElementById("textInput");

    var result = phoneticToAlpha(copyText.value);

    copyText.value = copyToClipboard(result);
}

function copyToClipboard(toCopy) {
    //Create a dummy element
    const el = document.createElement('textarea');
    //Set the value of the dummy element
    el.value = toCopy;
    document.body.appendChild(el);
    //Selects the contents of the dummy element
    el.select();
    //Copy selection to the clipboard
    document.execCommand('copy');
    //Removes dummy element
    document.body.removeChild(el);

    return toCopy;
}

function phoneticToAlpha(phonetic) {
    //Holds the plain text
    let strText = '';
    let i;
    //Converts string to array then loops through the array
    for (i of phonetic.split(' ')) {

        switch (i) {
            case 'alpha':
                strText += 'a';
                break;
            case 'bravo':
                strText += 'b';
                break;
            case 'charlie':
                strText += 'c';
                break;
            case 'delta':
                strText += 'd';
                break;
            case 'echo':
                strText += 'e';
                break;
            case 'foxtrot':
                strText += 'f';
                break;
            case 'golf':
                strText += 'g';
                break;
            case 'hotel':
                strText += 'h';
                break;
            case 'india':
                strText += 'i';
                break;
            case 'juliet':
                strText += 'j';
                break;
            case 'kilo':
                strText += 'k';
                break;
            case 'lima':
                strText += 'l';
                break;
            case 'mike':
                strText += 'm';
                break;
            case 'november':
                strText += 'n';
                break;
            case 'oscar':
                strText += 'o';
                break;
            case 'papa':
                strText += 'p';
                break;
            case 'qubec':
                strText += 'q';
                break;
            case 'romeo':
                strText += 'r';
                break;
            case 'sierra':
                strText += 's';
                break;
            case 'tango':
                strText += 't';
                break;
            case 'unifom':
                strText += 'u';
                break;
            case 'victor':
                strText += 'v';
                break;
            case 'whiskey':
                strText += 'w';
                break;
            case 'xray':
                strText += 'x';
                break;
            case 'yanky':
                strText += 'y';
                break;
            case 'zulu':
                strText += 'z';
                break;
            case 'zuluechoromeooscar':
                strText += '0';
                break;
            case 'oscarnovemberecho':
                strText += '1';
                break;
            case 'tanowhiskeyoscar':
                strText += '2';
                break;
            case 'tangohotelromeoechoecho':
                strText += '3';
                break;
            case 'foxtrotoscaruniformromeo':
                strText += '4';
                break;
            case 'foxtrotindiavictorecho':
                strText += '5';
                break;
            case 'sieraindiaexray':
                strText += '6';
                break;
            case 'sieraechovictorechonovember':
                strText += '7';
                break;
            case 'echoindiagolfhoteltango':
                strText += '8';
                break;
            case 'novemberinianovemberecho':
                strText += '9';
                break;
            case 'novemberechowhiskeylimaindianovemberecho':
                strText += '\n';
                break;
            case 'tangoalphabravo':
                strText += '\t';
                break;
            case 'sierapapaalphacharlieecho':
                strText += ' ';
                break;
            case 'charlieoscarmikemikealpha':
                strText += '\,';
                break;
            case 'papaechoromeoindiaoscardelta':
                strText += '.';
                break;
            case 'foxtrotoscarromeowhiskeyalpharomeodeltasieralimaalphasierahotel':
                strText += '/';
                break;
            case 'limaechosierasieratangohotelalphanovember':
                strText += '<';
                break;
            case 'golfromeoechoalphatangoerchoromeotangohotelalphanovember':
                strText += '>';
                break;
            case 'qubecuniformechosieratangoindiaoscarnovembermikealpharomeokilo':
                strText += '?';
                break;
            case 'sieraechomikeindiacharlieoscarlimaoscarnovember':
                strText += ';'

                break;
                break;
            case 'charlieoscarlimaoscarnovember':
                strText += ':';
                break;
            case 'sieraindianovebergolflimaechoqubecuniformoscartangoecho':
                strText += '\'';
                break;
            case 'deltaoscaruniformbravolimeechoqubecuniformoscartangoecho':
                strText += '\"';
                break;
            case 'limaechofoxtrottangobravoromeoalphacharliekiloechotango':
                strText += '[';
                break;
            case 'romeoindiagolfhoteltangobravoromeoalphacharliekiloechotango':
                strText += ']';
                break;
            case 'bravoalphacharliekilosieralimaalphasierahotel':
                strText += '\\';
                break;
            case 'limaechofoxtrottangobravoromeoalphacharlieecho':
                strText += '{';
                break;
            case 'romeoindiagolfhoteltangobravoromeoalphacharlieecho':
                strText += '}';
                break;
            case 'papaindiapapaecho':
                strText += '|';
                break;
            case 'mikeindianovemberuniformsiera':
                strText += '-';
                break;
            case 'echoqubecuniformalphalimasiera':
                strText += '=';
                break;
            case 'bravoalphacharliekilotangoindiachaliekilo':
                strText += '`';
                break;
            case 'tangoindialimadeltaalpha':
                strText += '~';
                break;
            case 'echoxraycharlielimaalphamikealphatangoindiaoscarnovemberpapaoscarindianovembertango':
                strText += '!';
                break;
            case 'alphatangosieraindiagolfnovember':
                strText += '@';
                break;
            case 'papaoscaruniformnovemberdeltasieraindiagolfnovember':
                strText += '#';
                break;
            case 'deltaoscarlimalimaalpharomeosieraindiagolfnovember':
                strText += '$';
                break;
            case 'papaechoromeocharlieechonovembertangosieraindiagolfnovember':
                strText += '%';
                break;
            case 'charliealpharomeoechotango':
                strText += '^';
                break;
            case 'alphamikepapaechoromeosieranovemberdelta':
                strText += '&';
                break;
            case 'alphasieratangoechoromeoindiasierakilo':
                strText += '*';
                break;
            case 'limaechofoxtrotpapaalpharomeoechonovember':
                strText += '(';
                break;
            case 'romeoindiagolfhoteltangopapaalpharomeoechonovember':
                strText += ')';
                break;
            case 'uniformnovemberdeltaechoromeosieracharlieoscarromeoecho':
                strText += '_';
                break;
            case 'papalimauniformsiera':
                strText += '+';
                break;
            case 'Alpha':
                strText += 'A';
                break;
            case 'Bravo':
                strText += 'B';
                break;
            case 'Charlie':
                strText += 'C';
                break;
            case 'Delta':
                strText += 'D';
                break;
            case 'Echo':
                strText += 'E';
                break;
            case 'Foxtrot':
                strText += 'F';
                break;
            case 'Golf':
                strText += 'G';
                break;
            case 'Hotel':
                strText += 'H';
                break;
            case 'India':
                strText += 'I';
                break;
            case 'Juliet':
                strText += 'J';
                break;
            case 'Kilo':
                strText += 'K';
                break;
            case 'Lima':
                strText += 'L';
                break;
            case 'Mike':
                strText += 'M';
                break;
            case 'November':
                strText += 'N';
                break;
            case 'Oscar':
                strText += 'O';
                break;
            case 'Papa':
                strText += 'P';
                break;
            case 'Qubec':
                strText += 'Q';
                break;
            case 'Romeo':
                strText += 'R';
                break;
            case 'Sierra':
                strText += 'S';
                break;
            case 'Tango':
                strText += 'T';
                break;
            case 'Unifom':
                strText += 'U';
                break;
            case 'Victor':
                strText += 'V';
                break;
            case 'Whiskey':
                strText += 'W';
                break;
            case 'Xray':
                strText += 'X';
                break;
            case 'Yanky':
                strText += 'Y';
                break;
            case 'Zulu':
                strText += 'Z';
                break;
            default:
                break;
        }
    }
    return strText;
}

function getHash() {
    let toHash = document.getElementById("passWord").value;
    if (toHash === '') {
        return alert('You must enter a password!');
    }
    let hashedPassword = SHA256(toHash);
    alert(hashedPassword);
    return toHash.value = '';
}
//Create a sha256 hash
function SHA256(s) {
    var chrsz = 8;
    var hexcase = 0;

    function safe_add(x, y) { var lsw = (x & 0xFFFF) + (y & 0xFFFF); var msw = (x >> 16) + (y >> 16) + (lsw >> 16); return (msw << 16) | (lsw & 0xFFFF); }

    function S(X, n) { return (X >>> n) | (X << (32 - n)); }

    function R(X, n) { return (X >>> n); }

    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }

    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }

    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }

    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }

    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }

    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

    function core_sha256(m, l) {
        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;
        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;
        for (var i = 0; i < m.length; i += 16) {
            a = HASH[0];
            b = HASH[1];
            c = HASH[2];
            d = HASH[3];
            e = HASH[4];
            f = HASH[5];
            g = HASH[6];
            h = HASH[7];
            for (var j = 0; j < 64; j++) {
                if (j < 16) W[j] = m[j + i];
                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                T2 = safe_add(Sigma0256(a), Maj(a, b, c));
                h = g;
                g = f;
                f = e;
                e = safe_add(d, T1);
                d = c;
                c = b;
                b = a;
                a = safe_add(T1, T2);
            }
            HASH[0] = safe_add(a, HASH[0]);
            HASH[1] = safe_add(b, HASH[1]);
            HASH[2] = safe_add(c, HASH[2]);
            HASH[3] = safe_add(d, HASH[3]);
            HASH[4] = safe_add(e, HASH[4]);
            HASH[5] = safe_add(f, HASH[5]);
            HASH[6] = safe_add(g, HASH[6]);
            HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
    }

    function str2binb(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz) { bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32); }
        return bin;
    }

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, '\n');
        var utftext = '';
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) { utftext += String.fromCharCode(c); } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }

    function binb2hex(binarray) {
        var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
        var str = '';
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
                hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
        }
        return str;
    }
    s = Utf8Encode(s);
    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}
/*
This code is for reference only

// register onclick events for Encrypt button
document.getElementById('cryptstr').onclick = function() {
    // gets data from input text
    var txt_string = document.getElementById('strex').value;

    // encrypts data and adds it in #strcrypt element
    document.getElementById('strcrypt').value = SHA256(txt_string);
    return false;
}*/
