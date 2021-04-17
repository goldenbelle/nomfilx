import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
`;

const Div = styled.div`
  width: 100%;
`;

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-top: 25px;
  border-top: solid 1px rgba(255, 255, 255, 0.2);
  margin-bottom: 15px;
`;

const Datas = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
`;

const Block = styled.div`
  margin: 5px;
`;

const SPoster = styled.div`
  background-image: url(${(props) => props.bgImg});
  height: 100px;
  margin: 5px 5px 5px 0px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Img = styled.img`
  width: 100px;
  height: 150px;
`;

const STitle = styled.div`
  margin: 5px 5px 5px 0px;
  text-align: center;
  word-wrap: break-word;
`;

const SubDetail = ({ subtitle, datas }) => (
  <>
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <Div>
        <Datas>
          {datas.map((n) => (
            <Block key={n.id}>
              <a href={n.id}>
                {n.poster_path && (
                  <>
                    <Img
                      src={`https://image.tmdb.org/t/p/original${n.poster_path}`}
                    />
                  </>
                )}

                {n.logo_path && (
                  <SPoster
                    bgImg={`https://image.tmdb.org/t/p/original${n.logo_path}`}
                  />
                )}
                <STitle> {n.name} </STitle>
              </a>
            </Block>
          ))}
        </Datas>
      </Div>
    </Container>
  </>
);

SubDetail.propTypes = {
  subtitle: PropTypes.string,
  datas: PropTypes.array,
};

export default SubDetail;
