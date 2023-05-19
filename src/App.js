import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from "axios";
const MapContainer = (props) => {
  const [map, setMap] = useState(null);
  const [current, setCurrent] = useState({lat: 37.7749, lng: -122.4194});

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCurrent({lat: data.latitude, lng: data.longitude})
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{
        lat: current.lat,
        lng: current.lng
      }}
      onReady={(mapProps, map) => setMap(map)} >

      <Marker position={{ lat: current.lat, lng: current.lng}} 
          
          icon={"https://maps.gstatic.com/mapfiles/ms2/micons/blue-pushpin.png"}
          style={{
            backgroundColor: "#0000ff",
            fillColor: "#0000ff",
            strokeColor: "0000ff",
            scale: 2,
          }}/>

      <Marker position={{ lat: 37.74383117213268, lng: -122.37779736896212 }} />
      <Marker position={{ lat: 37.793262206923096, lng: -122.4017890913628 }} />
      <Marker position={{ lat: 37.74449821321117, lng: -122.39695540584154 }} />
      <Marker position={{ lat: 37.794331003246846, lng: -122.39581105302317 }} />
      <Marker position={{ lat: 37.74255037355925, lng: -122.49267708221483 }} />
      <Marker position={{ lat: 37.72417289276133, lng:  -122.38973542901097 }} />
      <Marker position={{ lat: 37.792609401119016, lng:  -122.40131490545147 }} />
      <Marker position={{ lat: 37.77200865646878, lng: -122.3990838454733}} />
      <Marker position={{ lat: 37.78948669612784, lng:  -122.40246743800449}} />
      <Marker position={{ lat: 37.75023688477907, lng:  -122.39781803171861}} />
      <Marker position={{ lat: 37.79405318373291, lng: -122.39734769332577}} />
      <Marker position={{ lat: 37.787755298967475, lng:  -122.40878221396503}} />
      <Marker position={{ lat: 37.72659047951941, lng:  -122.3817522114059}} />
      <Marker position={{ lat: 37.78690491945698, lng:  -122.39092026296217}} />
      <Marker position={{ lat: 37.7266647697066, lng:  -122.38414422460619}} />
      <Marker position={{ lat: 37.72441324329633, lng:  -122.39015723961076}} />
      <Marker position={{ lat: 37.72578913981244, lng:  -122.37897271962358}} />
      <Marker position={{ lat: 37.778266576694556, lng:  -122.3988359224453}} />
      <Marker position={{ lat: 37.771021999243686, lng:  -122.4035462541838}} />
      <Marker position={{ lat: 37.756877451535736, lng:  -122.41857988947626}} />
      <Marker position={{ lat: 37.75281482922111, lng:  -122.40566264191837}} />
      <Marker position={{ lat: 37.77369415247486, lng:  -122.40965844135582}} />
      <Marker position={{ lat: 37.78788969990609, lng:  -122.40053532677749}} />
      <Marker position={{ lat: 37.78539563944047, lng:  -122.40439104283043}} />
      <Marker position={{ lat: 37.78988987820978, lng:  -122.39993041135052}} />
      <Marker position={{ lat: 37.78862121908618, lng:  -122.40806890640651}} />
      <Marker position={{ lat: 37.72305650933894, lng:  -122.39111194064196}} />
      <Marker position={{ lat: 37.70937546400143, lng:  -122.40415437850858}} />
      <Marker position={{ lat: 37.75887999201479, lng:  -122.41937920298372}} />
      <Marker position={{ lat: 37.787539893467496, lng:  -122.39772670915164}} />
      <Marker position={{ lat: 37.744889286143, lng:  -122.39097197693538}} />
      <Marker position={{ lat: 37.76855707131207, lng:  -122.40961023629804}} />
      <Marker position={{ lat: 37.7873042488646, lng:  -122.39803725191237}} />
      <Marker position={{ lat: 37.80457786909011, lng:  -122.43301077434302}} />
      <Marker position={{ lat: 37.80774328844553, lng:  -122.42414994486982}} />
      <Marker position={{ lat: 37.7865580501799, lng:  -122.40103337534973}} />
      <Marker position={{ lat: 37.726125239645036, lng:  -122.38319932723887}} />
      <Marker position={{ lat: 37.77604870809225, lng:  -122.42393921117214}} />
      <Marker position={{ lat: 37.73944545286909, lng:  -122.39301498669842}} />
      <Marker position={{ lat: 37.72531943367549, lng:  -122.3813892094274}} />
      <Marker position={{ lat: 37.78631979828399, lng:  -122.39823507424884}} />
      <Marker position={{ lat: 37.78814528329282, lng:  -122.39118192026297}} />
      <Marker position={{ lat: 37.735004228951425, lng:  -122.39017246969969}} />
      <Marker position={{ lat: 37.79142654133214, lng:  -122.40103785668795}} />
      <Marker position={{ lat: 37.76779784361899, lng:  -122.4120963188614}} />
      <Marker position={{ lat: 37.7879095795372, lng:  -122.39836076940526}} />
      <Marker position={{ lat: 37.725945558046504, lng:  -122.38228115325305}} />
      <Marker position={{ lat: 37.7879000978181, lng:  -122.39459403620495}} />
      <Marker position={{ lat: 37.72672797825706, lng:  -122.38865842883155}} />
      <Marker position={{ lat: 37.7270146636245, lng:  -122.38749735902202}} />
      <Marker position={{ lat: 37.793213731663414, lng:  -122.39704303671823}} />
      <Marker position={{ lat: 37.72648516321647, lng:  -122.38323245870731}} />
      <Marker position={{ lat: 37.72670967536868, lng:  -122.38529469118737}} />
      <Marker position={{ lat: 37.773287940470354, lng:  -122.44003231663504}} />
      <Marker position={{ lat: 37.72387884083248, lng:  -122.3870108787852}} />
      <Marker position={{ lat: 37.72695076437817, lng:  -122.3879799562619}} />
      <Marker position={{ lat: 37.7262494817986, lng:  -122.38781536801433}} />
      <Marker position={{ lat: 37.77425926306004, lng:  -122.41948598839828}} />
      <Marker position={{ lat: 37.79344652781607, lng:  -122.40034367559197}} />
      <Marker position={{ lat: 37.727566537591706, lng:  -122.4329697019889}} />
      <Marker position={{ lat: 37.72549804795053, lng:  -122.38836915044175}} />
      <Marker position={{ lat: 37.788778723377995, lng:  -122.40257456841074}} />
      <Marker position={{ lat: 37.74171783074393, lng:  -122.40541797744821}} />
      <Marker position={{ lat: 37.772363914767254, lng:  -122.39704097036318}} />
      <Marker position={{ lat: 37.72439752974338, lng:  -122.39150511638297}} />
      <Marker position={{ lat: 37.78991386713444, lng:  -122.40523289252366}} />
      <Marker position={{ lat: 37.76785244271805, lng:  -122.41610489253189}} />
      <Marker position={{ lat: 37.791757205944414, lng:  -122.39889763689186}} />
      <Marker position={{ lat: 37.77603906266594, lng:  -122.42417557149162}} />
      <Marker position={{ lat: 37.72325986632415, lng:  -122.39117288596881}} />
      <Marker position={{ lat: 37.77013758050153, lng:  -122.41598340280362}} />
      <Marker position={{ lat: 37.727234007495866, lng:  -122.38181551187014}} />
      <Marker position={{ lat: 37.780647210048365, lng:  -122.39462918166163}} />
      <Marker position={{ lat: 37.787076530384326, lng:  -122.39298262422754}} />
      <Marker position={{ lat: 37.77336405319086, lng:  -122.43787522530337}} />
      <Marker position={{ lat: 37.726725793811774, lng:  -122.38924985802704}} />
      <Marker position={{ lat: 37.7519716288769, lng:  -122.38796548380076}} />
      <Marker position={{ lat: 37.72878795772644, lng:  -122.39229482070176}} />
      <Marker position={{ lat: 37.77444911077535, lng:  -122.40208723606301}} />
      <Marker position={{ lat: 37.78732241931987, lng:  -122.39222370638346}} />
      <Marker position={{ lat: 37.783946907974226, lng:  -122.40715834498367}} />
      <Marker position={{ lat: 37.77146721590103, lng:  -122.41287229420975}} />
      <Marker position={{ lat: 37.725181700728754, lng:  -122.38819268844395}} />
      <Marker position={{ lat: 37.74925585952909, lng:  -122.39097537957679}} />
      <Marker position={{ lat: 37.727086633951366, lng:  -122.38107444874923}} />
      <Marker position={{ lat: 37.762590159713945, lng:  -122.41148385548222}} />
      <Marker position={{ lat: 37.72614569247294, lng:  -122.38822774090347}} />
      <Marker position={{ lat: 37.776566896519526, lng:  -122.42339537672727}} />
      <Marker position={{ lat: 37.7412902847707, lng: -122.49437792043544 }} />
      <Marker position={{ lat: 37.79092150726921, lng:  -122.4001004237385}} />
      <Marker position={{ lat: 37.78718284771541, lng:  -122.40123480885063}} />
      <Marker position={{ lat: 37.739378669437315, lng:  -122.38633794515339}} />
      <Marker position={{ lat: 37.7881394788716, lng:  -122.39257951537353}} />
      <Marker position={{ lat: 37.72647071624597, lng:  -122.38154121915817}} />
      <Marker position={{ lat: 37.72711043338281, lng:  -122.3882612881442}} />
      <Marker position={{ lat: 37.78969136758703, lng:  -122.39659563708379}} />
      <Marker position={{ lat: 37.79405318373291, lng:  -122.39734769332577}} />
      <Marker position={{ lat: 37.792150548481686, lng:  -122.39399997405945}} />
      <Marker position={{ lat: 37.74162368623527, lng:  -122.4015472063967}} />
      <Marker position={{ lat: 37.723661279505265, lng:  -122.43594382523997}} />
      <Marker position={{ lat: 37.748950363427056, lng:  -122.40149318970822}} />
      <Marker position={{ lat: 37.712302604744416, lng:  -122.43164419037294}} />
      <Marker position={{ lat: 37.74530890865633, lng:  -122.40342005999852}} />
      <Marker position={{ lat: 37.7758255197583, lng:  -122.41724962664345}} />
      <Marker position={{ lat: 37.79018557063344, lng:  -122.39547172580944}} />
      <Marker position={{ lat: 37.72673391124156, lng:  -122.37897200523552}} />
      <Marker position={{ lat: 37.77551013804947, lng:  -122.39099930600248}} />
      <Marker position={{ lat: 37.790149073725544, lng:  -122.39865818460403}} />
      <Marker position={{ lat: 37.744178447375724, lng:  -122.38671592975922}} />
      <Marker position={{ lat: 37.71699129032396, lng:  -122.38959908416973}} />
      <Marker position={{ lat: 37.79330427556103, lng:  -122.4014589984134}} />
      <Marker position={{ lat: 37.74569302612038, lng:  -122.39071458482128}} />
      <Marker position={{ lat: 37.763108325376656, lng:  -122.41345489002224}} />
      <Marker position={{ lat: 37.79330427556103, lng:  -122.4014589984134}} />
      <Marker position={{ lat: 37.763858081360304, lng:  -122.4220826209929}} />
      <Marker position={{ lat: 37.76735502136977, lng:  -122.42051791382852}} />
      <Marker position={{ lat: 37.760957168278544, lng:  -122.42182419935827}} />
      <Marker position={{ lat: 37.71852204856645, lng:  -122.3966614444168}} />
      <Marker position={{ lat: 37.769124412168054, lng:  -122.39147491124585}} />
      <Marker position={{ lat: 37.72943828845401, lng:  -122.37665780072307}} />
      <Marker position={{ lat: 37.72672797825706, lng:  -122.38865842883155}} />
      <Marker position={{ lat: 37.710451691867526, lng:  -122.39614907899559}} />
      <Marker position={{ lat: 37.79048514612, lng:  -122.40094044068951}} />
      <Marker position={{ lat: 37.746948295513135, lng:  -122.40339096031298}} />
      <Marker position={{ lat: 37.75924028515023, lng:  -122.4185441711166}} />
      <Marker position={{ lat: 37.788457028828915, lng:  -122.3998841605663}} />
      <Marker position={{ lat: 37.790406719940485, lng:  -122.39927588608576}} />
      <Marker position={{ lat: 37.72593049503994, lng:  -122.38921555942115}} />
      <Marker position={{ lat: 37.72716806878196, lng:  -122.39002914870102}} />
      <Marker position={{ lat: 37.79034624734142, lng:  -122.4018501909886}} />
      <Marker position={{ lat: 37.76317461963382, lng:  -122.41900951477052}} />
      <Marker position={{ lat: 37.795105560981405, lng:  -122.40087663372626}} />
      <Marker position={{ lat: 37.780723147544364, lng:  -122.44778964047842}} />
      <Marker position={{ lat: 37.72980548057414, lng:  -122.39924710472444}} />
      <Marker position={{ lat: 37.71644300214742, lng:  -122.38993787932108}} />
      <Marker position={{ lat: 37.73343881164075, lng:  -122.38046754951797}} />
      <Marker position={{ lat: 37.726594363386816, lng:  -122.39235562563125}} />
      <Marker position={{ lat: 37.78594032017338, lng:  -122.39779993385848}} />
      <Marker position={{ lat: 37.78442073689951, lng:  -122.41840535178247}} />
      <Marker position={{ lat: 37.718939819095944, lng:  -122.39051787206593}} />
      <Marker position={{ lat: 37.710003334289446, lng:  -122.47141191312888}} />
      <Marker position={{ lat: 37.77764220851001, lng:  -122.39341814593186}} />
      <Marker position={{ lat: 37.72867144281792, lng:  -122.38186508864092}} />
      <Marker position={{ lat: 37.72279368875932, lng:  -122.39171966647248}} />
      <Marker position={{ lat: 37.78767164448786, lng:  -122.39976292583923}} />
      <Marker position={{ lat: 37.730374237862826, lng:  -122.38186187865688}} />
      <Marker position={{ lat: 37.78159674576022, lng:  -122.43485778844028}} />
      <Marker position={{ lat: 37.725181700728754, lng:  -122.38819268844395}} />
      <Marker position={{ lat: 37.788877117266644, lng:  -122.42009102003807}} />
      <Marker position={{ lat: 37.764745350719494, lng:  -122.41656213947006}} />
      <Marker position={{ lat: 37.7386499426562, lng:  -122.40618611429521}} />
      <Marker position={{ lat: 37.78982691876333, lng:  -122.42112628905566}} />
      <Marker position={{ lat: 37.74475219161639, lng:  -122.38567924872147}} />
      <Marker position={{ lat: 37.7108412835853, lng:  -122.39964261496316}} />
      <Marker position={{ lat: 37.75563700983233, lng:  -122.40510193037899}} />
      <Marker position={{ lat: 37.720174722649276, lng:  -122.38940711434189}} />
      <Marker position={{ lat: 37.75461495148918, lng: -122.39038813202004}} />
      <Marker position={{ lat: 37.71920021771331, lng:  -122.39597673109593}} />
      <Marker position={{ lat: 37.72774449070106, lng:  -122.38210737524216}} />
      <Marker position={{ lat: 37.74854979425914, lng:  -122.41617066200786}} />
      <Marker position={{ lat: 37.725450702172296, lng:  -122.39199164141809}} />
      <Marker position={{ lat: 37.726708272962156, lng:  -122.38362491720036}} />
      <Marker position={{ lat: 37.77833025576586, lng:  -122.41151586526772}} />
      <Marker position={{ lat: 37.793213731663414, lng:  -122.39704303671823}} />
      <Marker position={{ lat: 37.782423563294664, lng:  -122.39323639939816}} />
      <Marker position={{ lat: 37.76830699279999, lng:  -122.41200033609215}} />
      <Marker position={{ lat: 37.77655004281911, lng:  -122.44630763555782}} />
      <Marker position={{ lat: 37.72044936265937, lng:  -122.39591501423702}} />
      <Marker position={{ lat: 37.744889286143, lng:  -122.39097197693538}} />
      <Marker position={{ lat: 37.73935716086751, lng:  -122.39152281175875}} />
      <Marker position={{ lat: 37.77433766636957, lng:  -122.39405328631256}} />
      <Marker position={{ lat: 37.77915720534109, lng:  -122.41161543051868}} />
      <Marker position={{ lat: 37.753927735726535, lng:  -122.41332312961758}} />
      <Marker position={{ lat: 37.76008693198698, lng:  -122.41880648110114}} />
      <Marker position={{ lat: 37.753717416902134, lng:  -122.38835902104361}} />
      <Marker position={{ lat: 37.755534471603866, lng:  -122.39392527753924}} />
      <Marker position={{ lat: 37.75338080997486, lng:  -122.38636768585714}} />
      <Marker position={{ lat: 37.79691371248354, lng:  -122.39665067526364}} />
      <Marker position={{ lat: 37.75310874987126, lng:  -122.38817020206616}} />
      <Marker position={{ lat: 37.80022091559222, lng:  -122.39956901857713}} />
      <Marker position={{ lat: 37.75224166848031, lng:  -122.38918854258944}} />
      <Marker position={{ lat: 37.79612338025215, lng:  -122.39727320433803}} />
      <Marker position={{ lat: 37.793871507150634, lng:  -122.39486523862108}} />
      <Marker position={{ lat: 37.754251708893726, lng:  -122.3893812288799}} />
      <Marker position={{ lat: 37.79155786415492, lng:  -122.39167149978557}} />
      <Marker position={{ lat: 37.712302604744416, lng:  -122.43164419037294}} />
      <Marker position={{ lat: 37.779159119969, lng:  -122.4158078824267}} />
      <Marker position={{ lat: 37.779159119969, lng:  -122.4158078824267}} />
      <Marker position={{ lat: 37.78886471534304, lng:  -122.39935935136297}} />
      <Marker position={{ lat: 37.77522830783405, lng:  -122.41746613186956}} />
      <Marker position={{ lat: 37.78228077241861, lng:  -122.40953118731998}} />
      <Marker position={{ lat: 37.79054831818324, lng:  -122.40033367367877}} />
      <Marker position={{ lat: 37.78069437740818, lng:  -122.40966881321906}} />
      <Marker position={{ lat: 37.78844615690132, lng:  -122.3986412420388}} />
      <Marker position={{ lat: 37.76381127729062, lng:  -122.3912653505994}} />
      <Marker position={{ lat: 37.784990279306456, lng:  -122.40567662907203}} />
      <Marker position={{ lat: 37.78511092044776, lng:  -122.40742266827704}} />
      <Marker position={{ lat: 37.788530010632506, lng:  -122.39514429387364}} />
      <Marker position={{ lat: 37.78886471534304, lng:  -122.39935935136297}} />
      <Marker position={{ lat: 37.79210933860902, lng:  -122.39580386550163}} />
      <Marker position={{ lat: 37.74732654654123, lng:  -122.49628067270531}} />
      <Marker position={{ lat: 37.790485146128, lng:  -122.40094044068951}} />
      <Marker position={{ lat: 37.74099473500238, lng:  -122.4011723353864}} />
      <Marker position={{ lat: 37.73911142974502, lng:  -122.38246497113636}} />
      <Marker position={{ lat: 37.73967879180792, lng:  -122.38649338455488}} />
      <Marker position={{ lat: 37.767855269354264, lng:  -122.42248440416165}} />
      <Marker position={{ lat: 37.747772091607466, lng:  -122.39703171897757}} />
      <Marker position={{ lat: 37.746856017691925, lng:  -122.39714976579396}} />
      <Marker position={{ lat: 37.72980548057414, lng:  -122.39924710472444}} />
      <Marker position={{ lat: 37.72980548057414, lng:  -122.39924710472444}} />
      <Marker position={{ lat: 37.787242602596706, lng:  -122.40687973821338}} />
      <Marker position={{ lat: 37.78891014957045, lng:  -122.40719603412224}} />
      <Marker position={{ lat: 37.7879142297241, lng:  -122.40527052309521}} />
      <Marker position={{ lat: 37.78717629174164, lng:  -122.40739807595821}} />
      <Marker position={{ lat: 37.78561008636915, lng:  -122.40815476434545}} />
      <Marker position={{ lat: 37.78795495968584, lng:  -122.39723654373122}} />
      <Marker position={{ lat: 37.767817181414145, lng:  -122.42057533514163}} />
      <Marker position={{ lat: 37.783922070111466, lng:  -122.44672163317198}} />
      <Marker position={{ lat: 37.78561008636915, lng:  -122.40815476434545}} />
      <Marker position={{ lat: 37.78215364099855, lng:  -122.40660110683912}} />
      <Marker position={{ lat: 37.775774368410254, lng:  -122.43733160784082}} />
      <Marker position={{ lat: 37.764459521442355, lng:  -122.42516137635808}} />
      <Marker position={{ lat: 37.792346385148, lng:  -122.40238532279395}} />
      <Marker position={{ lat: 37.78680165059711, lng:  -122.39787163500326}} />
      <Marker position={{ lat: 37.780918000993, lng:  -122.39241698313292}} />
      <Marker position={{ lat: 37.71019301997575, lng:  -122.4552219061259}} />
      <Marker position={{ lat: 37.7666247727157, lng:  -122.42951117634738}} />
      <Marker position={{ lat: 37.78924953407508, lng:  -122.40241859729358}} />
      <Marker position={{ lat: 37.724297778527635, lng:  -122.45937730954839}} />
      <Marker position={{ lat: 37.799260113502285, lng:  -122.39961794865545}} />
      <Marker position={{ lat: 37.787514060738104, lng:  -122.39956633142907}} />
      <Marker position={{ lat: 37.78844615690132, lng:  -122.3986412420388}} />
      <Marker position={{ lat: 37.799260113502285, lng:  -122.39961794865545}} />
      <Marker position={{ lat: 37.799260113502285, lng:  -122.39961794865545}} />
      <Marker position={{ lat: 37.738726803987134, lng:  -122.40673602990493}} />
      <Marker position={{ lat: 37.7758255197583, lng:  -122.41724962664345}} />
      <Marker position={{ lat: 37.768320249510616, lng:  -122.42711064395493}} />
      <Marker position={{ lat: 37.7865580501799, lng:  -122.40103337534973}} />
      <Marker position={{ lat: 37.79092150726921, lng:  -122.4001004237385}} />
      <Marker position={{ lat: 37.788778723377995, lng:  -122.40257456841074}} />
      <Marker position={{ lat: 37.792948952834664, lng:  -122.39809861316652}} />
      <Marker position={{ lat: 37.77529014231951, lng:  -122.4407311621107}} />
      <Marker position={{ lat: 37.792948952834664, lng:  -122.39809861316652}} />
      <Marker position={{ lat: 37.79344652781607, lng:  -122.40034367559197}} />
      <Marker position={{ lat: 37.766897602559155, lng:  -122.42032247306807}} />
      <Marker position={{ lat: 37.792870749741496, lng:  -122.4007474940767}} />
      <Marker position={{ lat: 37.79092150726921, lng:  -122.4001004237385}} />
      <Marker position={{ lat: 37.78924953407508, lng:  -122.40241859729358}} />
      <Marker position={{ lat: 37.793262206923096, lng:  -122.4017890913628}} />
      <Marker position={{ lat: 37.786856111883054, lng:  -122.40689189299718}} />
      <Marker position={{ lat: 37.78798864899528, lng:  -122.39610066847152}} />
      <Marker position={{ lat: 37.76624504710292, lng:  -122.38735628651092}} />
      <Marker position={{ lat: 37.78911920766765, lng:  -122.39588103933524}} />
      <Marker position={{ lat: 37.78511092044776, lng:  -122.40742266827704}} />
      <Marker position={{ lat: 37.76624504710292, lng:  -122.38735628651092}} />
      <Marker position={{ lat: 37.78798864899528, lng:  -122.39610066847152}} />
      <Marker position={{ lat: 37.78911920766765, lng:  -122.39588103933524}} />
      <Marker position={{ lat: 37.793262206923096, lng:  -122.4017890913628}} />
      <Marker position={{ lat: 37.785469746489916, lng:  -122.40661576107294}} />
      <Marker position={{ lat: 37.79694900602121, lng:  122.40218343189426}} />
      <Marker position={{ lat: 37.779051111573146, lng:  -122.39830388133372}} />
      
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB6VsDRKKm6_TzfbiZmUV4WWBT-BTn5D3Q'
})(MapContainer);