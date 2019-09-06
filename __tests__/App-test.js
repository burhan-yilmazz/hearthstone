/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from 'react-native-testing-library';
import 'jest-styled-components/native'
import { FlipCard, CardInfo, MechanicsItem, CustomHeader } from 'Components';
import base64 from 'Assets/images/base64';

it('Flip Card Components', () => {
  const wrapper = render(<FlipCard item={cards[0]} />);
  const uri = `https://www.hearthstonedb.net/images/enus/${cards[0].cardId}.png`;

  expect(wrapper.getAllByTestId("cardInfo")).toHaveLength(1);
  expect(wrapper.getAllByTestId("cardImage")).toHaveLength(1);
  expect(wrapper.getByTestId("cardImage").props.source.uri).toBe(uri);

});

it('Card Info Components', () => {
  const wrapper = render(<CardInfo card={cards[0]} />);

  expect(wrapper.queryAllByText("Psychopomp")).toHaveLength(1);
  expect(wrapper.queryAllByText("Saviors of Uldum")).toHaveLength(1);
  expect(wrapper.queryAllByText("Minion")).toHaveLength(1);
  expect(wrapper.queryAllByText("Epic")).toHaveLength(1);
  expect(wrapper.queryAllByText("4")).toHaveLength(1);
  expect(wrapper.queryAllByText("Jim Nelson")).toHaveLength(0);
  expect(wrapper.queryAllByText("Restless Mummy")).toHaveLength(0);

});

it('Mechanics Item Components', () => {
  const wrapper = render(<MechanicsItem mechanic={mechanics[0]} />);

  expect(wrapper.queryAllByText(mechanics[0])).toHaveLength(1);
  expect(wrapper.queryAllByText(mechanics[1])).toHaveLength(0);
  expect(wrapper.getAllByTestId("mechanicItemsIcon")).toHaveLength(1);

});


it('Custom Header Components', () => {
  const title = "Mechanics Title"
  const wrapper = render(<CustomHeader title={title} searchIcon={base64.SearchIcon} navigation={{ navigate: jest.fn(), goBack: jest.fn()}} />);
  
  expect(wrapper.queryAllByText(title)).toHaveLength(1);
  expect(wrapper.queryAllByTestId("headerTitle")).toHaveLength(1);
  expect(wrapper.queryAllByTestId("headerBackIcon")).toHaveLength(0);
  expect(wrapper.queryAllByTestId("headerSearchIcon")).toHaveLength(1);
  expect(wrapper.queryAllByTestId("headerSearchInput")).toHaveLength(0);
  expect(wrapper.getByTestId("headerTitle").props.children).toBe(title);


});

const cards = [
  {
    "cardId": "ULD_268",
    "dbfId": "53935",
    "name": "Psychopomp",
    "cardSet": "Saviors of Uldum",
    "type": "Minion",
    "rarity": "Epic",
    "cost": 4,
    "attack": 3,
    "health": 1,
    "text": "[x]<b>Battlecry:</b> Summon a\\nrandom friendly minion\\nthat died this game.\\nGive it <b>Reborn</b>.",
    "flavor": "\"Come with me if you want to re-live.\"",
    "artist": "Jim Nelson",
    "collectible": true,
    "playerClass": "Priest",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/ULD_268.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/ULD_268_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Reborn"
      },
      {
        "name": "Battlecry"
      }
    ]
  },
  {
    "cardId": "ULD_206",
    "dbfId": "53407",
    "name": "Restless Mummy",
    "cardSet": "Saviors of Uldum",
    "type": "Minion",
    "rarity": "Common",
    "cost": 4,
    "attack": 3,
    "health": 2,
    "text": "<b>Rush</b>\\n<b>Reborn</b>",
    "flavor": "Life-separation anxiety syndrome.",
    "artist": "Ivan Fomin",
    "collectible": true,
    "playerClass": "Warrior",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/ULD_206.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/ULD_206_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Rush"
      },
      {
        "name": "Reborn"
      }
    ]
  },
]

const mechanics = [
  "Taunt",
  "Freeze",
  "Secret",
  "Charge"
];