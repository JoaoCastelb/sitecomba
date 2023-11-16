import booking from "./logos/booking.jpg"
import abnb from "./logos/arbnb.jpg"
import vrbo from "./logos/vrbo.jpg"

export default function Reserv(){
    return (
        <div className="section-reserva">
            <p className="sections-title-reserva">ESCOLHA A PLATAFORMA ONDE DESEJA FAZER A RESERVA</p>
            <div className="sites">
                <a  
                    href="https://www.booking.com/hotel/pt/moradia-santa-comba.pt-pt.html?aid=311098&label=moradia-santa-comba-0UMR%2ArXymJ%2AlwKd3v_azkQS468222728365%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-2007787596709%3Akwd-972419551667%3Alp1011721%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfpWGnRw6lOG-DQvPBEpJPI&sid=428eabe47d428a776d41dbcfe68a395b&checkin=2023-11-08;checkout=2023-11-09;dest_id=-2175323;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;soh=1;sr_order=popularity;srepoch=1699487649;srpvid=e3f0a80dd605005d;type=total;ucfs=1&#no_availability_msg" 
                    className="site" 
                    target="_blank"
                >
                    <img className="logotipo" src= {booking}/>BOOKING
                </a>
                <a href="https://www.airbnb.pt/rooms/36316775?_set_bev_on_new_domain=1699985348_NWU1YjcxMzczYjU2&source_impression_id=p3_1699985349_F%2FEQy3A1Lzcj8GJL" className="site" target="_blank"><img className="logotipo" src= {abnb}/>AIRBNB</a>
                <a href="http://www.google.com" className="site" target="_blank"><img className="logotipo" src= {vrbo}/>VRBO</a>
            </div>
        </div>
        
    )
}