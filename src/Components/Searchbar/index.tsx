import React, { useState } from "react";
import {
    SearchbarInput,
    ButtonContainer,
    SearchbarContainer,
} from "./SearchbarElements";
import { FaSearch } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";

export interface Props {
    lg?: boolean;
    active?: boolean;
}

const Searchbar: React.FC<Props> = ({ lg, active }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const searchQueryonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <SearchbarContainer active={active}>
            <SearchbarInput
                lg={lg}
                placeholder="Enter your destination..."
                value={searchQuery}
                onChange={searchQueryonChange}
            />

            <ButtonContainer lg={lg}>
                <FaSearch />
            </ButtonContainer>
        </SearchbarContainer>
    );
};

export default Searchbar;
