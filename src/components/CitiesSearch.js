import React, {useState} from 'react'
import {Container, SearchBar, CitiesMetropolis, OverseasCities,SearchTitle,SearchInput,CitiesTitle,OvereasTitle,ContainerCities,CardCity,CityName,PostalCode,NbCitiesFound} from './CitiesElements'
import axios from 'axios'

const CitiesSearch = () => {
    const [datas, setDatas] = useState([])
    const [searchData,setSearchData] = useState('')

    //recupere les donnees saisis et les envoies au back pour les traiter et faire la requete.
    const handleChange = (e) => {
        setSearchData(e.target.value)
        if (e.target.value === '')
            setDatas([])
        else {
            axios({
                method: "get",
                url: "http://localhost:8080/cities/all",
                params: {data: e.target.value},
            }).then((response) => setDatas(response.data));
        }
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
                {datas.length !== 0 ? <NbCitiesFound>{datas.length} villes correspondant au texte saisi</NbCitiesFound>: ''}
               {datas.length !== 0? datas.map((city,index) => {
                   return <CardCity>
                            <CityName key={index}>{city.nomCommune}</CityName>
                            <PostalCode key={index}>{city.codePostal}</PostalCode>
                       </CardCity>;
               }): ''}
                </ContainerCities>
            </CitiesMetropolis>
            <OverseasCities>
                <OvereasTitle>ville d&apos;outre-mer</OvereasTitle>
            </OverseasCities>
        </Container>
    )
}

export default CitiesSearch
