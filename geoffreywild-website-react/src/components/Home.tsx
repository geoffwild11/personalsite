import React from "react";

import SafeBlankLink from "./SafeBlankLink";

function Home() {
    return (
        <div>
            <h2>Welcome!</h2>

            <h3>A little bit about me</h3>
            <p>
                My name is Geoff Wild. I'm a software developer. I live and work around Madison, WI with my wife and 3 kids.
            </p>
            <p>
                In my spare time, I like to work on personal projects like game prototypes or this website. I've also spent some 
                time working on a platform with <SafeBlankLink link="https://zerohour-productions.net">Zero Hour Productions</SafeBlankLink> to 
                help people run video game marathons or just their streams. We also use this platform when we run our own charity marathons 
                (such as <SafeBlankLink link="https://superstigmaslam.com/">Super Stigma Slam</SafeBlankLink>). I also enjoy playing hockey weekly.
            </p>
            <h3>Favorite Games</h3>
            <ul>
                <li><SafeBlankLink link="http://www.fantasystrike.com/">Fantasy Strike</SafeBlankLink> - PC/Switch/XBox</li>
                <li><SafeBlankLink link="https://www.speedrun.com/supermetroid/run/yw4dpe0z">Super Metroid</SafeBlankLink> - SNES</li>
                <li><SafeBlankLink link="https://www.speedrun.com/doubledragon2/run/z5135wgm">Double Dragon II: The Revenge</SafeBlankLink> - NES</li>
                <li><SafeBlankLink link="https://www.speedrun.com/aac/run/yl9152xy">Assault Android Cactus</SafeBlankLink> - PC/Switch</li>
            </ul>
        </div>
    );
}

export default Home;