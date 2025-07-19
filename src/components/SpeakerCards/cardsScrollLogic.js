import { mapRange, vrScrollIntoView } from "@/components/SpeakerCards/Support";
import { Speaker_data } from "@/data/SpeakersData";

export default function cardsScrollLogic(
  cardContElm,
  currCardIndex,
  leftScroll
) {
  //Loop through the children of the card cont and check for its bounds; if its within bounds, it's the currently active card;
  [].slice.call(cardContElm.children).forEach(function (ele, index) {
    //!!The inactive cards are scaled down, so for accurate checking; we only scale a child element thus keeping the parent same size;
    let cardCont = ele.getElementsByClassName("sub-card-cont")[0];
    let cardImg = cardCont.getElementsByClassName("card-img")[0];
    //Check for bounds; if with in bound set the currIndexCard;
    if (
      Math.abs(
        ele.getBoundingClientRect().left -
          cardContElm.getBoundingClientRect().left
      ) < 30
    ) {
      currCardIndex.current = index;
      cardCont.style.transform = "scale(0.9)";
      cardCont.style.transitionDelay = "0s";
      cardImg.style.transform = "scale(1.2) translateY(-20px)";
      //When the cards are scrolled; scroll the left container to the same index;
      vrScrollIntoView(leftScroll.current, leftScroll.current.children[index]);
    }
  });
  //For resizing the cards w.r.t its position;
  [].slice.call(cardContElm.children).forEach(function (ele, index) {
    let cardCont = ele.getElementsByClassName("sub-card-cont")[0];
    const leftScrollClsList = leftScroll.current.children[index].classList,
      cardElmClsList = ele.classList;
    if (index !== currCardIndex.current) {
      let size =
        index > currCardIndex.current
          ? mapRange(
              index,
              currCardIndex.current,
              Speaker_data.length,
              0.9,
              0.7
            )
          : mapRange(index, currCardIndex.current, 0, 0.9, 0.7);

      let delay =
        index > currCardIndex.current
          ? mapRange(
              index,
              currCardIndex.current,
              Speaker_data.length,
              0.1,
              0.5
            )
          : mapRange(index, currCardIndex.current, 0, 0.1, 0.5);

      cardCont.style.transitionDelay = delay + "s";

      cardCont.style.transform = `scale(${size})`;
      leftScrollClsList.remove("active");
      cardElmClsList.remove("active");
    } else {
      leftScrollClsList.add("active");
      cardElmClsList.add("active");
    }
  });
}
