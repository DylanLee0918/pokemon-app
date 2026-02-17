import { useEffect } from "react";
import type { FunctionComponent } from "react";
import { connect, type ConnectedProps } from "react-redux";
import * as pokemonActions from "../modules/pokemon/actions";
import { type RootState } from "../modules/reducers";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledCard } from "../components/Card";

const Container = styled.div`
  height: 1080px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  overflow: "hidden"; // Prevents scrollbar

  /* Tablet and up */
  @media (min-width: 768px) {
    .container {
      padding: 24px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  /* Desktop and up */
  @media (min-width: 1024px) {
    .container {
      padding: 32px;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const CardWrapper = styled.div`
  height: 1080px;
  max-height: 100vh;
  background: #526d82;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: semi-bold;
  font-family: Roboto-Medium;
`;

const CardList = styled.div`
  width: 66.5vw;
  height: 69vh;
  overflow: auto;
  background: #9db2bf;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-gap: 10mm;
  padding: 35px;
  margin: 15px 0px;

  /* Tablet and up */
  @media (min-width: 768px) {
    height: 90vh;
    width: 80vw;
  }

  /* Desktop and up */
  @media (min-width: 1024px) {
    height: 72vh;
    width: 54vw;
  }
`;

type Props = ReduxProps;

const Pokemon: FunctionComponent<Props> = (props: Props) => {
  const { getPokemonList, pokemonList } = props;
  const redirect = useNavigate();

  useEffect(() => {
    getPokemonList();
  }, [getPokemonList]);

  const handleClick = (name: string) => {
    setTimeout(() => {
      redirect(`/pokemon-details?name=${name}`);
    }, 1000);
  };

  return (
    <>
      <Container>
        <CardWrapper>
          <StyledCard>
            <TitleContainer>
              <Title>Pokemon</Title>
            </TitleContainer>
            <CardList>
              {pokemonList.map((pokemon, index) => {
                return (
                  <div onClick={() => handleClick(pokemon.name)} key={index}>
                    {pokemon.name}
                  </div>
                );
              })}
            </CardList>
          </StyledCard>
        </CardWrapper>
      </Container>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  pokemonList: state.pokemonList.pokemon.list,
});

const mapDispatchToProps = {
  getPokemonList: pokemonActions.getPokemonList,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

const ConnectedPokemon = connector(Pokemon);

export default ConnectedPokemon;
