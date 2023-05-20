// Implements a dynamic text based banner that can split a message into multiple
// lines based on a provided lineLengthLimit.

class Banner {
  constructor(message) {
    this.message = message;
    this.messageLength = message.length;
  }

  displayBanner(lineLengthLimit = this.messageLength) {
    console.log(
      [
        this.horizontalRule(lineLengthLimit),
        this.emptyLine(lineLengthLimit),
        this.messageLine(lineLengthLimit),
        this.emptyLine(lineLengthLimit),
        this.horizontalRule(lineLengthLimit),
      ].join("\n")
    );
  }

  horizontalRule(lineLengthLimit = this.messageLength) {
    return `+-${"-".repeat(lineLengthLimit)}-+`;
  }

  emptyLine(lineLengthLimit = this.messageLength) {
    return `| ${" ".repeat(lineLengthLimit)} |`;
  }

  padMessage(message, length) {
    if (message.length > length) {
      throw new Error(
        "Provided message string is longer than string length limit"
      );
    }
    let totalPaddingLength = length - message.length;
    let rightPaddingLength = Math.floor(totalPaddingLength / 2);
    let leftPaddingLength = totalPaddingLength - rightPaddingLength;
    let rightPadding = " ".repeat(rightPaddingLength);
    let leftPadding = " ".repeat(leftPaddingLength);
    return `| ${rightPadding}${message}${leftPadding} |`;
  }

  findLastSpaceIdx(str, characterLimit) {
    let strSlice = str.slice(0, characterLimit + 1);
    return strSlice.lastIndexOf(" ");
  }

  messageLine(lineLengthLimit = this.messageLength) {
    let currentMessage = this.message;
    let messageArray = [];
    while (currentMessage.length > lineLengthLimit) {
      let lastSpaceIdx = this.findLastSpaceIdx(
        currentMessage.slice(0, lineLengthLimit),
        lineLengthLimit
      );
      let stringSlice = currentMessage.slice(0, lastSpaceIdx);
      let paddedMessage = this.padMessage(stringSlice, lineLengthLimit);
      messageArray.push(paddedMessage);
      currentMessage = currentMessage.slice(lastSpaceIdx + 1);
    }
    if (currentMessage.length > 0 || messageArray.length === 0) {
      messageArray.push(this.padMessage(currentMessage, lineLengthLimit));
    }

    return messageArray.join("\n");
  }
}

let banner1 = new Banner("To boldly go where no one has gone before.");
banner1.displayBanner(10);
/*
+------------+
|            |
| To boldly  |
|  go where  |
|   no one   |
|  has gone  |
|  before.   |
|            |
+------------+
 */

banner1.displayBanner(21);
/*
+-----------------------+
|                       |
|  To boldly go where   |
|    no one has gone    |
|        before.        |
|                       |
+-----------------------+
 */

banner1.displayBanner();
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

let banner2 = new Banner("");
banner2.displayBanner(10);
/*
+------------+
|            |
|            |
|            |
+------------+
 */

banner2.displayBanner(21);
/*
+-----------------------+
|                       |
|                       |
|                       |
+-----------------------+
 */

banner2.displayBanner();
/*
+--+
|  |
|  |
|  |
+--+
 */
