import React, {useState} from 'react'
import {Container, SearchBar, CitiesMetropolis, CitiesOverseas,SearchTitle,SearchInput,CitiesTitle,OverseasTitle,ContainerCities,CardCity,CityName,PostalCode,NbCitiesFound,NbCitiesNotFound,ShowMore} from './CitiesElements'
import axios from 'axios'

const CitiesSearch = () => {
    const [metropoleCities, setMetropoleCities] = useState([])
    const [overseasCities, setOverseasCities] = useState([])
    const [searchData,setSearchData] = useState('')
    const [showCities, setShowCities] = useState(400)

    //recupere les donnees saisis et les envoies au back pour les traiter et faire la requete.
    const handleChange = (e) => {
        setSearchData(e.target.value)
        setShowCities(100)
        if (e.target.value === ''){
            setMetropoleCities([])
            setOverseasCities([])
            setShowCities(100)
        }
        else {
            axios({
                method: "get",
                url: "http://localhost:8080/cities/all",
                params: {data: e.target.value},
            }).then((response) => {
                setMetropoleCities(response.data.metropoleCities)
                setOverseasCities(response.data.overseasCities)
            });
        }
    }

    const showMoreCities = () => {
        setShowCities(showCities >= metropoleCities.length ? metropoleCities.length : showCities + 100)
    }

    return (
        <Container>
            <SearchBar>
                <SearchTitle>Je recherche... </SearchTitle>
                <SearchInput 
                 type="text"
                 onChange={handleChange}
                 value={searchData}
                 id="search"
                 placeholder=" ...une ville, un code postal"
                />
            </SearchBar>
            <CitiesMetropolis>
                <CitiesTitle> villes de metropole</CitiesTitle>
                <ContainerCities>
                {metropoleCities.length !== 0 ? <NbCitiesFound>{metropoleCities.length} villes correspondant au texte saisi</NbCitiesFound>: <NbCitiesNotFound>{metropoleCities.length} villes correspondant au texte saisi</NbCitiesNotFound>}
                {metropoleCities.length !== 0 ? metropoleCities.slice(0,showCities).map((city,index) => {
                   return <CardCity key={index}>
                            <CityName>{city.nomCommune}</CityName>
                            <PostalCode >{city.codePostal}</PostalCode>
                       </CardCity>;
               }): ''}
                </ContainerCities>
                {showCities <= metropoleCities.length ? <ShowMore onClick={showMoreCities}>Show more...</ShowMore> : ''}
            </CitiesMetropolis>
            <CitiesOverseas>
                <OverseasTitle>ville d&apos;outre-mer</OverseasTitle>
                <ContainerCities>
                {overseasCities.length !== 0 ? <NbCitiesFound>{overseasCities.length} villes correspondant au texte saisi</NbCitiesFound>:  <NbCitiesNotFound>{overseasCities.length} villes correspondant au texte saisi</NbCitiesNotFound>}
                {overseasCities.length !== 0 ? overseasCities.map((city,index) => {
                   return <CardCity key={index}>
                            <CityName>{city.nomCommune}</CityName>
                            <PostalCode >{city.codePostal}</PostalCode>
                       </CardCity>;
               }): ''}
                </ContainerCities>
            </CitiesOverseas>
        </Container>
    )
}

export default CitiesSearch
