import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from '../../CommonComponents/ButtonIcon/ButtonIcon';
import Input from '../../CommonComponents/Input/Input';
import { useState } from 'react';
import './SearchBar.scss';



export default function SearchBar() {
  const [searchRequestData, setSearchRequestData] = useState("");

  function changeSearchData(e: any) {
    setSearchRequestData(e.target.value);
  };

  function resetSearchInput() {
    setSearchRequestData('');
  }

  return (
    <>
      <div className='search'>
        {searchRequestData && <ButtonIcon typeButton="icon-button search__icon-close" isDisabled={false} clickFunction={resetSearchInput} titleButton="Reset search" fontAwesome={faXmark}></ButtonIcon>}
        <Input id="search-input" classText='search-input' isError={false} inputType='text' inputValue={searchRequestData} placeholder="Search" changeFunction={changeSearchData}></Input>
        <ButtonIcon typeButton="icon-button search__icon-submit" isDisabled={false} titleButton='Search' fontAwesome={faMagnifyingGlass}></ButtonIcon>
      </div>
    </>
  );
}
