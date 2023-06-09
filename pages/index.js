import { Autocomplete, Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Avatar, Card, CardHeader, Grid} from "@mui/material";
import Layout from "@/components/Layout";
import StateCard from '@/components/stateCard';
import { stateList } from '@/states';
import { CSVLink, CSVDownload } from "react-csv";


export default function Locations() {
    const [dropdownData, setDropdownData] = useState(null);
    const [stateData, setStateData] = useState(null);
    const [chosenState, setChosenState] = useState(null);
    const [loading, setLoading] = useState(true);

    

    const filterOptions = (options, state) => {
        let newOptions = [];
        options.forEach((element) => {
          if (
            element.label.toLowerCase()
              .includes(state.inputValue.toLowerCase()) || (state.inputValue.toUpperCase() in stateList && stateList[state.inputValue.toUpperCase()].toLowerCase() === element.label.toLowerCase())
          )
            newOptions.push(element);
        
        });
        return newOptions;
      };

    useEffect(() => {
        if (!dropdownData) {
            console.log('getting to axios')
          axios
            .get(`https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest`)
            .then((response) => {
                setStateData(response.data.data)
                const dropdownchoices = response.data.data.map(stateInfo => {return {label:stateInfo.State , id:stateInfo["ID State"]}})
                console.log('dropdownchoices', dropdownchoices)
                setDropdownData(dropdownchoices);
                setLoading(false);
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
            setDropdownData(null);
        }
      }, []);

    return (
    <Layout >
      <Grid spacing={3}>
        {!loading && <Autocomplete 
            options={dropdownData}
            renderInput={(params) => <TextField {...params} label="State" />}
            filterOptions={filterOptions}
            onChange={(event, newValue) => {
                if(newValue) {
                const selectedData = stateData.find((state) => state.State === newValue.label )  
                setChosenState(selectedData);
                }
              }}
            />}
        {chosenState && <StateCard stateData={chosenState}/>}
        {stateData && <Button sx={{mt:1}} variant="contained"><CSVLink filename={"statesPopulation.csv"} data={stateData}>Download All state population data</CSVLink></Button>}
      </Grid>
    </Layout>
  )
}