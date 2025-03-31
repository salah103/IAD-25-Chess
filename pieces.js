class Piece {
  constructor(name, color, position) {
    this.name = name.toLowerCase(); // 'pawn', 'rook', etc.
    this.color = color; // 'white' or 'black'
    this.position = position; // [x, y]
  }

  canCapture(targetPiece) {
    if (this.color === targetPiece.color) return false;

    const [x1, y1] = this.position;
    const [x2, y2] = targetPiece.position;

    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);

    switch (this.name) {
      case 'pawn':
        return dx === 1 && ((this.color === 'white' && y2 === y1 - 1) || (this.color === 'black' && y2 === y1 + 1));
      case 'rook':
        return x1 === x2 || y1 === y2;
      case 'bishop':
        return dx === dy;
      case 'queen':
        return x1 === x2 || y1 === y2 || dx === dy;
      case 'king':
        return dx <= 1 && dy <= 1;
      case 'knight':
        return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
      default:
        return false;
    }
  }
}

module.exports = Piece;
