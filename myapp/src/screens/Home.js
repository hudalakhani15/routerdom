import { Chip, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../img1.jpg"
import img2 from "../img2.jpg"
import img3 from "../img3.jpg"


function Home(){
    return (
        <Grid >
      <Grid>
        <Typography className="mt-5" variant="h2">World</Typography>
      </Grid>
      <Grid>
        <Typography className="mt-5" variant="h6">In its most general sense, the term "world" refers to the totality of entities, to the whole of reality or to everything that is.[1] The nature of the world has been conceptualized differently in different fields. Some conceptions see the world as unique while others talk of a "plurality of worlds". Some treat the world as one simple object while others analyze the world as a complex made up of many parts. In scientific cosmology the world or universe is commonly defined as "[t]he totality of all space and time; all that is, has been, and will be". Theories of modality, on the other hand, talk of possible worlds as complete and consistent ways how things could have been.</Typography>

      </Grid>
     
      <Grid>
      <img className="mt-5 w-50"  src={img1}/>

      </Grid>
      <Grid>
        <Typography className="mt-5" variant="h6">"World history studies the world from a historical perspective. Unlike other approaches to history, it employs a global viewpoint. It deals less with individual nations and civilizations, which it usually approaches at a high level of abstraction.[85] Instead, it concentrates on wider regions and zones of interaction, often interested in how people, goods and ideas move from one region to another"</Typography>
      </Grid>
      <Grid>
        <img
         className="mt-2 " src={img2} />
        {/* <Typography variant="h5">According to this paradigm, history can be divided into three periods in relation to the dominant region in the world: Middle Eastern dominance before 500 BCE, Eurasian cultural balance until 1500 CE and Western dominance since 1500 CE.[87] Big history employs an even wider framework than world history by putting human history into the context of the history of the universe as a whole. </Typography> */}
      </Grid>
      <Grid className="maindiv mt-5">
        <Grid className="mt-5"><img src={img3}/></Grid>
        <Grid>
            <Typography className="mt-5 fw-bold" variant="h6">The time of sunset is defined in astronomy as the moment when the upper limb of the Sun disappears below the horizon.[1] Near the horizon, atmospheric refraction causes sunlight rays to be distorted to such an extent that geometrically the solar disk is already about one diameter below the horizon when a sunset is observed. </Typography>
            <Typography className="mt-3" variant="h4">Dive right in with a template that’s ready to go, <br/> and launch your page without a line of code.<br/> Typeforms can rank on Google, and you can <br/> redirect to any URL upon completion. </Typography>
        </Grid>
      </Grid>

      <Grid className="footer">
        <Grid>
            <Typography className="p-5" variant="h3" sx={{color:"white"}}>Time to launch that landing page</Typography>
        </Grid>
        <Grid>
        <Typography> <Chip sx={{ backgroundColor : 'white', color:"black", padding: "5px",paddingY:"5px",fontSize: "large"}} className="mt-3 p-4" label="Get Started it's Free" variant="filled"/></Typography>
      </Grid>


      </Grid>

       
       
       
   
        </Grid>
    )
}


export default Home;