import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// import "@openzeppelin/contracts/access/Ownable.sol";

contract TestFactory is ERC721 {
    uint256 private _currentTokenId = 0;
    mapping(uint256 => string) tokenLinks;

    constructor() ERC721("test token", "TST") {}

    function mintTo(string memory link) public returns (uint256) {
        uint256 newTokenId = _getNextTokenId();
        _mint(msg.sender, newTokenId);
        tokenLinks[newTokenId] = link;
        _incrementTokenId();
        return newTokenId;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return tokenLinks[_tokenId];
    }

    function _incrementTokenId() private {
        _currentTokenId++;
    }

    function _getNextTokenId() private view returns (uint256) {
        return _currentTokenId + 1;
    }
}
