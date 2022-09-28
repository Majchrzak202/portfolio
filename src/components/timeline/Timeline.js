import React from "react";
import {
  Timeline,
  Events,
  ImageEvent,
  TextEvent,
  createTheme,
  themes,
} from "@merc/react-timeline";
import Photo1 from "./Photo1.jpg";
import Photo2 from "./Photo2.jpg";
import Photo3 from "./Photo3.jpg";
import Photo4 from "./Photo4.jpg";
import Photo5 from "./Photo5.jpg";
import Photo6 from "./Photo6.jpg";
import Photo7 from "./Photo7.jpg";
import useStyles from "./Styles";

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "0px",
    borderColor: "rgba(255, 255, 255, 0)",
    boxShadow: "0 0 0 0 hsla(0, 0%, 0%, 0.2)",
    color: "white",
    width: "auto",
    height: "auto",
  },
  date: {
    backgroundColor: "rebeccapurple",
  },
  marker: {
    borderColor: "rebeccapurple",
  },
  timelineTrack: {
    backgroundColor: "rgba(98, 0, 238, 255)",
    width: "2px",
  },
  imageText: {
    fontSize: "20px",
    fontWeight: 700,
  },
});

const CoolTimeline = () => {
  const classes = useStyles();
  return (
    <Timeline theme={customTheme}>
      <Events>
        <ImageEvent
          date="10/03/1993"
          text="Na Łódzkich Bałutach na świat przychodzi Marcin Łuba."
          src={Photo1}
          alt="jellyfish swimming"
          credit="(Nadal lubię Colę)"
        ></ImageEvent>

        <ImageEvent
          date="15/07/1998"
          text="Marcin po raz pierwszy w życiu odwiedza Dalmację."
          src={Photo2}
          alt="dalmatian sea"
          credit=" Jego małe serce już wtedy mówi mu, że to jest jego miejsce na ziemi"
        ></ImageEvent>

        <ImageEvent
          date="15/04/2003"
          text="Pierwsze kawałki kodu... "
          src={Photo3}
          alt="computer"
          credit="'Jak to undefined? Wczoraj działało'"
        >
          <div>
            <p style={{ fontSize: 8 }}>
              *cały czas mam tego PSX widocznego w tle
            </p>
          </div>
        </ImageEvent>

        <ImageEvent
          date="20/02/2015"
          text="Marcin wskakuje na pokład mBanku"
          src={Photo4}
          alt="computer"
          credit="i z marszu zostaje pracownikiem roku, za co w nagrodę leci obejrzeć
          Khakę (i delfiny) w Nowej Zelandii"
        ></ImageEvent>

        <TextEvent style={{ opacity: 0 }} date="10/05/2016" text="">
          <div className={classes.textBlock}>
            <h1 className={classes.title}>Leci z mBankiem do Long Beach </h1>
            <p className={classes.para}>
              Jako finalista ICMI Global Awards 2016 i chce odwiedzić Snoop
              Doga, ale nie ma go akurat w domu :(
            </p>
          </div>
        </TextEvent>

        <ImageEvent
          date="10/11/2017"
          text="Rzuca bankowość i postanaiwa zostać blogerem i freelancerem.  "
          src={Photo5}
          alt="computer"
          credit="Wtedy też zaczyna kleić swoje pierwsze
          strony w Wordpresie i styka się z Javascript'em (love wtyczki)"
        >
          <div></div>
        </ImageEvent>

        <ImageEvent
          date="15/10/2018"
          text="Po raz pierwszy goli głowę"
          src={Photo6}
          alt="computer"
          credit="Siada 'like a slav' i robi sobie na niej tatuaż (związany z
            kodowaniem)"
        >
          <div></div>
        </ImageEvent>

        <TextEvent style={{ opacity: 0 }} date="02/06/2019" text="">
          <div className={classes.textBlock}>
            <h1 className={classes.title}>
              Wraca do bankowości na pokładzie Santander Banku
            </h1>
          </div>
        </TextEvent>

        <ImageEvent
          date="08/07/2021"
          text="Marcin odwiedza Dalmację i ukochaną wyspę *Korculę po raz 15 życiu"
          src={Photo7}
          alt="computer"
          credit=" Składa przysięgę przed masywem Sv. Iljii. Postanawia pójść za głosem serca. Chce nauczyć się Frontu,
          zacząć robić niesamowite rzeczy i przeprowadzić się do ukochanej
          Dalmacji 
          "
        >
          <div>
            <p style={{ fontSize: 8 }}>
              *to też jest ulubiona wyspa Roberta Makłowicza
            </p>
          </div>
        </ImageEvent>
      </Events>
    </Timeline>
  );
};

export default CoolTimeline;
