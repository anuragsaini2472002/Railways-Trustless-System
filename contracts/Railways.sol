pragma solidity ^0.5.0;

contract Railways {

    uint256 fare;
    uint256 ticketno;
    uint256 latetime;
    uint256 refund;
    
    mapping(uint256 => uint256) tno;
    mapping(uint256 => uint256) ramount;
    function store(uint256 f,uint256 _ticketno) public {
        fare=f;
        tno[_ticketno]=f;
        return true;
    }

    function ltime(uint256 l,uint256 _ticketno) public {
        latetime=l;
        if(latetime>60)
        {
            ramount[_ticketno]=10*tno[_ticketno]/100;
        }
        else
        {
            refund=0;
        }
        
    }
    
    function retrieve(uint256 _ticketno) public view returns (uint256){
        
        return ramount[_ticketno];
    }
}