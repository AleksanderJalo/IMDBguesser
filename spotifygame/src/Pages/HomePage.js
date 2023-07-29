import React from "react";
import ImdbLogo from "../images/imdblogo.png";
import { useStore } from "../stores/store";
import CategoryModal from "../component/CategoryModal";
const HomePage = (props) => {
  const { movies, genres } = useStore();
  const genreHandler = () => {
    console.log(movies)
    props.pageHandler("GenrePage");
  }
  return (
    <div className="h-min-screen w-full bg-black flex flex-col justify-center items-center">
      <div className="w-3/4 flex flex-col gap-3 h-2/5 justify-center">
        <img src={ImdbLogo} alt="logo" />
        <div className="text-white font-roboto text-4xl">GUESSER</div>
      </div>
      <div className="h-3/5 flex flex-col gap-6 w-full items-center p-5">
        <div className="text-white text-2xl border-2 border-white px-3 py-3 w-full font-roboto">
          CHOOSE CATEGORY
        </div>
        {movies.length > 22 && (
          <div className=" flex flex-col w-full items-center">
            <div className="w-full h-1/2 flex">
              <CategoryModal
                movieImg={`https://image.tmdb.org/t/p/original/${movies[3].backdrop_path}`}
              >
                MOST POPULAR MOVIES{" "}
              </CategoryModal>
              <CategoryModal
                movieImg={`https://image.tmdb.org/t/p/original/${movies[6].backdrop_path}`}
              >
                TOP RATED MOVIES{" "}
              </CategoryModal>
            </div>
            <div className="w-full h-1/2 flex">
              <div className="w-1/2">
                <CategoryModal
                  onClick={genreHandler}
                  movieImg={`https://image.tmdb.org/t/p/original/${movies[21].backdrop_path}`}
                >
                  CHOOSE GENRE{" "}
                </CategoryModal>
              </div>
              <div className="w-1/2">
                <CategoryModal
                  movieImg={`https://image.tmdb.org/t/p/original/${movies[18].backdrop_path}`}
                >
                  MOST POPULAR SHOWS
                </CategoryModal>
              </div>
            </div>
            <div className="h-1/2 flex">
              <div className="w-1/2 h-full"></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

//   const { movies } = useStore();
//   return (
//     <div className="min-h-screen w-full flex bg-black font-robot">
//       <div className="flex flex-col justify-center items-center h-full w-1/2 gap-12">
//         <div className="flex flex-col justify-items-center bg-[#05386B] p-6 border-8 border-black">
//           <img src={ImdbLogo} alt="imdb logo" />
//           <div className="text-[#EDF5E1] text-8xl mt-2 ">GUESSER</div>
//               </div>
//               <div className="text-6xl px-6 text-[#05386B] font-frosh">GUESS WHICH MOVIE IS BETTER!!!</div>
//       </div>
//       {movies.length > 22 && (
//         <div className="w-1/2 h-full flex flex-col justify-center items-center gap-16 bg-[#05386B] font-roboto">
//           {/* <div className="text-4xl text-white text-left">Choose game mode:</div> */}
//           <div className="flex gap-6 justify-center ">
//             <CategoryModal
//               movieImg={`https://image.tmdb.org/t/p/original/${movies[3].backdrop_path}`}
//             >
//               {" "}
//               MOST POPULAR MOVIES
//             </CategoryModal>
//             <CategoryModal
//               movieImg={`https://image.tmdb.org/t/p/original/${movies[20].backdrop_path}`}
//             >
//               {" "}
//               TOP RATED MOVIES
//             </CategoryModal>
//           </div>
//           <div className="flex gap-6 justify-center">
//             {" "}
//             <CategoryModal
//               movieImg={`https://image.tmdb.org/t/p/original/${movies[22].backdrop_path}`}
//             >
//               {" "}
//               CHOOSE A CATEGORY
//             </CategoryModal>
//             <CategoryModal
//               movieImg={`https://image.tmdb.org/t/p/original/${movies[24].backdrop_path}`}
//             >
//               {" "}
//               MOST POPULAR TV
//             </CategoryModal>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;
