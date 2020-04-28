import React from "react";
import {
  Stage,
  Layer,
  Rect,
  Text,
  Circle,
  Line,
  Arrow,
  Ellipse,
} from "react-konva";

const BEER = new window.Image();
BEER.src = "beer.png";

const MILK = new window.Image();
MILK.src = "milk.png";

const MARLENKA = new window.Image();
MARLENKA.src = "marlenka.png";

const ADIDAS = new window.Image();
ADIDAS.src = "adidas.png";

const VODKA = new window.Image();
VODKA.src = "vodka.png";

const PUSSY = new window.Image();
PUSSY.src = "pussy.png";

const KOFOLA = new window.Image();
KOFOLA.src = "kofola.png";

const KEFEAR = new window.Image();
KEFEAR.src = "kefear.jpg";

const KEFEARPNG = new window.Image();
KEFEARPNG.src = "kefear.png";

const ITEMS = {
  beer: BEER,
  marlenka: MARLENKA,
  milk: MILK,
  pussy: PUSSY,
  vodka: VODKA,
  kefear: KEFEARPNG,
  kofola: KOFOLA,
};

const TARGETS = [
  { key: "CL", xScale: 0.05, yScale: 0.88, value: 100, peopleHit: 0 },
  { key: "BL", xScale: 0.18, yScale: 0.88, value: 70, peopleHit: 0 },
  { key: "TL", xScale: 0.5, yScale: 0.1, value: 70, peopleHit: 0 },
  { key: "BR", xScale: 0.85, yScale: 0.45, value: 200, peopleHit: 0 },
  { key: "CR", xScale: 0.95, yScale: 0.88, value: 20, peopleHit: 0 },
  { key: "M", xScale: 0.6, yScale: 0.3, value: 10, peopleHit: 0 },
];

const PEOPLE_NAMES = [
  "Kubo",
  "Marko",
  "Miro",
  "Kmeca",
  "Krusty",
  "Karin",
  "Kajo",
  "Miso",
  "Klaudy",
  "Dominika",
  "Miska",
  "Colka",
  "Tomas",
  "Zuzka",
  "Dano",
  "Samo",
  "Ogs",
  "Ostatni",
].sort();

const PEOPLE = {
  Ostatni: {
    name: "Ostatni",
    width: 100,
    height: 170,
    color: "green",
    hand: "right",
    sixpack: false,
    consumptionFactor: 8,
    item: "milk",
    items: [],
    strength: 0.1,
    windFactor: 1,
    precision: 0.2,
    throws: 0,
    targetsHit: [],
  },
  Ogs: {
    name: "Ogs",
    width: 60,
    height: 170,
    color: "green",
    hand: "right",
    sixpack: false,
    hair: true,
    consumptionFactor: 5,
    items: [],
    item: "beer",
    strength: 1.2,
    windFactor: 0.5,
    precision: 1,
    throws: 0,
    targetsHit: [],
  },
  Samo: {
    name: "Samo",
    width: 55,
    height: 170,
    color: "blue",
    hand: "right",
    sixpack: false,
    consumptionFactor: 1,
    items: [],
    item: "beer",
    strength: 0.9,
    windFactor: 0.3,
    precision: 0.95,
    throws: 0,
    targetsHit: [],
  },
  Zuzka: {
    name: "Zuzka",
    width: 50,
    height: 140,
    color: "red",
    hand: "right",
    hair: true,
    consumptionFactor: 1,
    items: [],
    item: "beer",
    strength: 0.8,
    windFactor: 0.6,
    precision: 0.98,
    throws: 0,
    targetsHit: [],
  },
  Dominika: {
    name: "Dominika",
    width: 50,
    height: 140,
    color: "red",
    hand: "right",
    sixpack: false,
    hair: true,
    consumptionFactor: 1,
    items: [],
    item: "kofola",
    strength: 0.66,
    windFactor: 0.9,
    precision: 0.85,
    throws: 0,
    targetsHit: [],
  },
  Miso: {
    name: "Miso",
    width: 60,
    height: 180,
    color: "blue",
    hand: "right",
    sixpack: false,
    hair: true,
    consumptionFactor: 2,
    items: [],
    item: "kofola",
    strength: 0.95,
    windFactor: 0.1,
    precision: 0.98,
    throws: 0,
    targetsHit: [],
  },
  Karin: {
    name: "Karin",
    width: 50,
    height: 140,
    color: "red",
    hand: "right",
    hair: true,
    consumptionFactor: 1,
    items: [],
    item: "kofola",
    strength: 0.77,
    windFactor: 0.2,
    precision: 0.95,
    throws: 0,
    targetsHit: [],
  },
  Colka: {
    name: "Colka",
    width: 50,
    height: 140,
    color: "red",
    hand: "right",
    sixpack: false,
    consumptionFactor: 1,
    items: [],
    item: "beer",
    strength: 0.79,
    windFactor: 0.5,
    precision: 0.99,
    throws: 0,
    targetsHit: [],
  },
  Marko: {
    name: "Marko",
    width: 50,
    height: 90,
    color: "gray",
    hand: "right",
    sixpack: false,
    consumptionFactor: 2,
    item: "beer",
    items: [],
    strength: 0.8,
    windFactor: 0.5,
    precision: 0.9,
    throws: 0,
    targetsHit: [],
  },
  Miro: {
    name: "Miro",
    width: 60,
    height: 200,
    color: "red",
    hand: "right",
    sixpack: true,
    consumptionFactor: 6,
    item: "marlenka",
    items: [],
    strength: 1.3,
    windFactor: 0.2,
    precision: 1,
    throws: 0,
    targetsHit: [],
  },
  Kajo: {
    name: "Kajo",
    width: 60,
    height: 190,
    color: "blue",
    hand: "left",
    sixpack: true,
    consumptionFactor: 2,
    items: [],
    item: "kofola",
    strength: 0.8,
    windFactor: 0.5,
    precision: 0.97,
    throws: 0,
    targetsHit: [],
  },
  Krusty: {
    name: "Krusty",
    width: 100,
    height: 160,
    color: "white",
    hand: "right",
    consumptionFactor: 4,
    item: "vodka",
    items: [],
    adidas: true,
    pupek: true,
    strength: 1.3,
    windFactor: 0.5,
    precision: 0.3,
    throws: 0,
    targetsHit: [],
  },
  Tomas: {
    name: "Tomas",
    width: 88,
    height: 160,
    color: "blue",
    hand: "right",
    consumptionFactor: 5,
    item: "beer",
    items: [],
    pupek: true,
    strength: 0.8,
    windFactor: 0.5,
    precision: 0.95,
    throws: 0,
    targetsHit: [],
  },
  Kmeca: {
    name: "Kmeca",
    width: 60,
    height: 200,
    color: "white",
    hand: "right",
    consumptionFactor: 1,
    item: "marlenka",
    items: [],
    hair: true,
    strength: 0.8,
    windFactor: 0.5,
    precision: 0.99,
    throws: 0,
    targetsHit: [],
  },
  Kubo: {
    name: "Kubo",
    width: 70,
    height: 170,
    color: "white",
    hand: "right",
    pupek: true,
    consumptionFactor: 5,
    item: "beer",
    items: [],
    hair: true,
    adidas: true,
    strength: 1,
    windFactor: 0.5,
    precision: 0.99,
    throws: 0,
    targetsHit: [],
  },
  Dano: {
    name: "Dano",
    width: 70,
    height: 170,
    color: "purple",
    hand: "right",
    consumptionFactor: 2,
    item: "milk",
    items: [],
    strength: 0.75,
    windFactor: 0.7,
    precision: 0.8,
    throws: 0,
    targetsHit: [],
  },
  Klaudy: {
    name: "Klaudy",
    width: 50,
    height: 170,
    color: "white",
    hand: "right",
    sixpack: true,
    hair: true,
    consumptionFactor: 1,
    item: "milk",
    items: [],
    strength: 1,
    windFactor: 0.3,
    precision: 0.98,
    throws: 0,
    targetsHit: [],
  },
  Miska: {
    name: "Miska",
    width: 50,
    height: 140,
    color: "pink",
    hand: "right",
    hair: true,
    consumptionFactor: 1,
    item: "pussy",
    items: [],
    strength: 0.65,
    windFactor: 0.3,
    precision: 0.6,
    throws: 0,
    targetsHit: [],
  },
};

for (let name of Object.keys(PEOPLE)) {
  if (name === "Ostatni") PEOPLE[name].image = KEFEAR;
  else {
    const image = new window.Image();
    image.src = `${name.toLowerCase()}.png`;
    PEOPLE[name].image = image;
  }
}

const getFrisbeeHold = function (name, center) {
  let { width, height } = PEOPLE[name];
  const legHeight = height * 0.4;
  const cx = center.x;
  const cy = center.y - height / 2 - legHeight;

  return {
    x: cx + (PEOPLE[name].hand === "right" ? -0.8 : 0.8) * width,
    y: cy + height / 5,
  };
};

const randInt = n => Math.floor(Math.random() * n);
const dist = (a, b) =>
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

const Person = function ({ person, center }) {
  let {
    name,
    width,
    height,
    color,
    sixpack,
    image,
    consumptionFactor,
    items,
    item,
    hair,
    pupek,
    adidas,
  } = person;

  const legHeight = height * 0.4;
  const cx = center.x;
  const cy = center.y - height / 2 - legHeight;

  const headRadius = Math.min(200, hair ? 1.4 * width : width / 1.5);
  const w = image.width;
  const backgroundScale = (2 * headRadius) / w;
  const backGroundOffset = w / 2;
  const headY = cy - height / 2 - (hair ? 0 : height / 8 + width / 8);

  while (consumptionFactor > items.length) {
    items.push({
      x: cx - cx / 4 + randInt(cx / 1.5),
      y: center.y + randInt(40) - 20,
    });
  }

  return (
    <>
      {/* Legs */}
      <Line
        points={[
          cx,
          cy,
          cx - width / 2,
          center.y - legHeight / 1.7,
          cx - width / 2,
          center.y,
          cx - width / 2 - width / 8,
          center.y,
        ]}
        strokeWidth={9}
        stroke="black"
        shadowBlur={2}
      />
      <Line
        points={[
          cx + width / 5,
          cy,
          cx + width / 3,
          center.y,
          cx + width / 3 + width / 8,
          center.y,
        ]}
        strokeWidth={9}
        stroke="black"
        shadowBlur={2}
      />
      {/* Arms */}
      <Line
        points={[
          cx,
          cy - height / 2.5,
          cx - width / 3,
          cy - height / 2.5,
          cx - 0.8 * width,
          cy,
          cx - 0.8 * width,
          cy + height / 5,
        ]}
        strokeWidth={9}
        stroke="black"
        shadowBlur={2}
      />
      <Line
        points={[
          cx,
          cy - height / 2.5,
          cx + width / 3,
          cy - height / 2.5,
          cx + 0.8 * width,
          cy,
          cx + 0.8 * width,
          cy + height / 5,
        ]}
        strokeWidth={9}
        stroke="black"
        shadowBlur={2}
      />
      {/* Body */}
      <Ellipse
        x={cx}
        y={cy}
        radiusX={width / 2}
        radiusY={height / 2}
        fillLinearGradientStartPoint={{ x: 0, y: 0 }}
        fillLinearGradientEndPoint={{ x: width, y: height }}
        fillLinearGradientColorStops={[0, color, 1, "black"]}
        stroke="black"
        shadowBlur={5}
      />
      {/* Pupek */}
      {pupek && (
        <Circle
          x={cx - 7}
          y={cy + height / 6}
          radius={2}
          stroke="black"
          shadowBlur={5}
        />
      )}
      {/* Sixpack */}
      {sixpack &&
        [
          [cx - width / 4, cy, cx + width / 4, cy],
          [cx - width / 4, cy + height / 9, cx + width / 4, cy + height / 9],
          [
            cx - width / 4,
            cy + (2 * height) / 9,
            cx + width / 4,
            cy + (2 * height) / 9,
          ],
          [cx, cy - height / 20, cx, cy + (2 * height) / 7],
        ].map((pts, index) => (
          <Line
            key={index}
            points={pts}
            strokeWidth={1}
            stroke="black"
            shadowBlur={2}
            shadowOffsetX={1}
          />
        ))}
      {/* Adidas */}
      {adidas && (
        <Circle
          x={cx - 0.1 * width}
          y={cy - 0.1 * height}
          radius={0.4 * ADIDAS.width}
          fillPatternImage={ADIDAS}
          fillPatternScale={{ x: 0.4, y: 0.4 }}
          fillPatternOffset={{
            x: ADIDAS.width / 2,
            y: ADIDAS.width / 2,
          }}
          fillPatternRepeat="no-repeat"
        />
      )}
      {/* Kefear */}
      {!adidas && (
        <Circle
          x={cx}
          y={cy - 0.2 * height}
          radius={width / 3}
          fillPatternImage={ITEMS.kefear}
          fillPatternScale={{
            x: width / 2 / ITEMS.kefear.width,
            y: width / 2 / ITEMS.kefear.height,
          }}
          fillPatternOffset={{
            x: ITEMS.kefear.width / 2,
            y: ITEMS.kefear.width / 2,
          }}
          fillPatternRepeat="no-repeat"
          shadowBlur={3}
        />
      )}
      {/* Head */}
      <Circle
        x={cx}
        y={headY}
        radius={headRadius}
        fillPatternImage={image}
        fillPatternScale={{ x: backgroundScale, y: backgroundScale }}
        fillPatternOffset={{ x: backGroundOffset, y: backGroundOffset }}
        fillPatternRepeat="no-repeat"
        shadowBlur={5}
      />
      {/* Items */}
      {items
        .sort((a, b) => a.y > b.y)
        .map((i, index) => (
          <Circle
            key={name + index.toString()}
            x={i.x}
            y={i.y}
            radius={0.4 * ITEMS[item].width}
            fillPatternImage={ITEMS[item]}
            fillPatternScale={{ x: 0.4, y: 0.4 }}
            fillPatternOffset={{
              x: ITEMS[item].width / 2,
              y: ITEMS[item].width / 2,
            }}
            fillPatternRepeat="no-repeat"
            shadowBlur={5}
          />
        ))}
    </>
  );
};

class KefearSimulator extends React.Component {
  constructor(props) {
    super(props);

    // load Frisbee image
    const frisbeeImage = new window.Image();
    const backGroundImage = new window.Image();
    frisbeeImage.onload = () => {
      this.setState({
        frisbeeImage: frisbeeImage,
      });
    };
    backGroundImage.onload = () => {
      this.setState({
        backGroundImage: backGroundImage,
      });
    };
    frisbeeImage.src = "kefear.jpg";
    backGroundImage.src = "background.jpg";

    this.state = {
      score: 0,
      width: window.innerWidth,
      height: window.innerHeight,

      thrower: null,
      wind: 0,

      frisbeeImage: null,
      frisbeePosition: null,
      frisbeeRotation: randInt(360),

      throwInProcess: false,
    };
  }

  throwerChange = function (newThrower) {
    const arrowOffset = this.getMinXY(0.1);
    const center = { x: this.getX(0.5), y: this.getY(0.88) };
    const frisbeePosition = getFrisbeeHold(newThrower, center);

    if (newThrower === "Miro") {
      PEOPLE[newThrower].hand = randInt(5) > 1 ? "right" : "left";
    }
    this.setState({
      thrower: newThrower,
      frisbeePosition: frisbeePosition,
      arrowPosition: this.state.arrowPosition
        ? this.state.arrowPosition
        : {
            x:
              frisbeePosition.x +
              (PEOPLE[newThrower].hand === "right" ? -1 : 1) * arrowOffset,
            y: frisbeePosition.y - arrowOffset,
          },
      boundRadius: this.getMinXY(0.25),
      frisbeeRotation: randInt(360),
      throwInProcess: false,
    });
  };

  getX = percent => this.state.width * percent;
  getY = percent => this.state.height * percent;
  getMinXY = percent => Math.min(this.getX(percent), this.getY(percent));
  getArrowVector = () => {
    const scale =
      dist(this.state.arrowPosition, this.state.frisbeePosition) /
      this.state.boundRadius;
    return {
      x:
        (scale * (this.state.arrowPosition.x - this.state.frisbeePosition.x)) /
        this.state.boundRadius,
      y:
        (scale * (this.state.arrowPosition.y - this.state.frisbeePosition.y)) /
        this.state.boundRadius,
    };
  };
  getStartVector = () => {
    const { strength, precision } = PEOPLE[this.state.thrower];
    let { x, y } = this.getArrowVector();

    // Random rotation based on precision
    const maxOff = Math.floor((1.0 - precision) * 90);
    const alpha = randInt(2 * maxOff) - maxOff;
    const s = Math.sin((alpha * Math.PI) / 180);
    const c = Math.cos((alpha * Math.PI) / 180);
    [x, y] = [c * x - s * y, s * x + c * y];

    const startVector = {
      x: x * this.getMinXY(0.05) * strength,
      y: y * this.getMinXY(0.03) * strength,
    };
    return startVector;
  };
  updateVector = vector => {
    const { windFactor } = PEOPLE[this.state.thrower];
    return {
      x:
        vector.x + (windFactor * (this.getMinXY(0.001) * this.state.wind)) / 20,
      y: vector.y + 0.3,
    };
  };
  isOutOfBounds = () => {
    if (this.state.frisbeePosition.y > this.getY(0.88)) return true;
    return false;
  };
  hitSideBareer = moveVector => {
    const frisbeeRadius = this.getMinXY(0.023) + 10;
    let { x, y } = this.state.frisbeePosition;
    x += moveVector.x;
    y += moveVector.y;
    if (
      // right
      y >= this.getY(0.3) - frisbeeRadius &&
      y <= this.getY(0.6) + frisbeeRadius &&
      Math.abs(x - this.getX(0.8)) <= frisbeeRadius
    )
      return true;
    if (
      // left
      y >= this.getY(0.3) - frisbeeRadius &&
      y <= this.getY(0.88) + frisbeeRadius &&
      Math.abs(x - this.getX(0.2)) <= frisbeeRadius
    )
      return true;
    return false;
  };
  hitTopBareer = moveVector => {
    const frisbeeRadius = this.getMinXY(0.023) + 10;
    let { x, y } = this.state.frisbeePosition;
    x += moveVector.x;
    y += moveVector.y;
    if (
      x >= this.getX(0.4) - frisbeeRadius &&
      x <= this.getX(0.6) + frisbeeRadius &&
      Math.abs(y - this.getY(0.2)) <= frisbeeRadius
    )
      return true;
    return false;
  };
  hitTarget = () => {
    const frisbeeRadius = this.getMinXY(0.015) + 7;
    const targetRadius = this.getMinXY(0.02);

    for (let t of TARGETS) {
      if (
        dist(this.state.frisbeePosition, {
          x: this.getX(t.xScale),
          y: this.getY(t.yScale),
        }) <=
        frisbeeRadius + targetRadius
      ) {
        if (!PEOPLE[this.state.thrower].targetsHit.includes(t.key)) {
          t.peopleHit += 1;
          PEOPLE[this.state.thrower].targetsHit.push(t.key);
          this.setState({
            score: this.state.score + t.peopleHit * t.value,
          });
        }
        return true;
      }
    }
    return false;
  };

  frisbee = (scale = 0.023) => {
    const radius = this.getMinXY(scale);
    let backgroundScale = 1;
    let backGroundOffset = 0;

    if (this.state.frisbeeImage) {
      const w = this.state.frisbeeImage.width;
      backgroundScale = (2 * radius) / w;
      backGroundOffset = w / 2;
    }

    return (
      this.state.frisbeeImage && (
        <Circle
          x={this.state.frisbeePosition.x}
          y={this.state.frisbeePosition.y}
          radius={radius}
          fillPatternImage={this.state.frisbeeImage}
          fillPatternScale={{ x: backgroundScale, y: backgroundScale }}
          fillPatternOffset={{ x: backGroundOffset, y: backGroundOffset }}
          fillPatternRotation={this.state.frisbeeRotation}
          fillPatternRepeat="no-repeat"
          stroke="black"
          strokeWidth={2}
        />
      )
    );
  };

  background = () => {
    const w = this.state.backGroundImage?.width;
    const h = this.state.backGroundImage?.height;
    const backgroundScale = Math.max(
      this.state.height / h,
      this.state.width / w
    );

    return (
      this.state.backGroundImage && (
        <Rect
          x={0}
          y={0}
          width={this.state.width}
          height={this.state.height}
          fillPatternImage={this.state.backGroundImage}
          fillPatternScale={{ x: backgroundScale, y: backgroundScale }}
          fillPatternRepeat="no-repeat"
        />
      )
    );
  };

  throw = moveVector => {
    if (!this.state.throwInProcess) return;

    const sideBareer = this.hitSideBareer(moveVector);
    const topBareer = this.hitTopBareer(moveVector);

    this.setState(
      {
        frisbeeRotation: this.state.frisbeeRotation + 15,
        frisbeePosition: {
          x: this.state.frisbeePosition.x + (sideBareer ? 0 : moveVector.x),
          y: this.state.frisbeePosition.y + (topBareer ? 0 : moveVector.y),
        },
      },
      () => {
        if (this.hitTarget()) {
          setTimeout(() => this.throwerChange(this.state.thrower), 500);
        } else if (this.isOutOfBounds()) {
          setTimeout(() => this.throwerChange(this.state.thrower), 500);
        } else if (sideBareer) {
          requestAnimationFrame(() => {
            this.throw(
              this.updateVector({
                x: -0.3 * moveVector.x,
                y: 1.2 * moveVector.y,
              })
            );
          });
        } else if (topBareer) {
          requestAnimationFrame(() => {
            this.throw(
              this.updateVector({ x: moveVector.x, y: -0.2 * moveVector.y })
            );
          });
        } else {
          requestAnimationFrame(() => {
            this.throw(this.updateVector(moveVector));
          });
        }
      }
    );
  };

  handleThrow = e => {
    this.setState(
      {
        throwInProcess: !this.state.throwInProcess,
      },
      () => {
        if (this.state.throwInProcess) {
          PEOPLE[this.state.thrower].throws += 1;

          let { throws, consumptionFactor, item } = PEOPLE[this.state.thrower];
          if (
            consumptionFactor > 0 &&
            randInt(consumptionFactor) > 8 - throws
          ) {
            PEOPLE[this.state.thrower].throws = 0;
            PEOPLE[this.state.thrower].consumptionFactor += 1;
            if (
              item === "beer" ||
              item === "marlenka" ||
              item === "milk" ||
              item === "vodka" ||
              item === "kofola"
            ) {
              PEOPLE[this.state.thrower].width *= 1.05;
            }
          }

          this.throw(this.getStartVector());
        } else this.throwerChange(this.state.thrower);
      }
    );
  };

  render() {
    return (
      <>
        <div
          style={{
            zIndex: 2,
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: 10,
            paddingBottom: 10,
            textAlign: "center",
            left: 0,
            right: 0,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            fontSize: 15,
          }}
        >
          {PEOPLE_NAMES.map(name => (
            <label key={name}>
              <input
                type="radio"
                name="editList"
                value={name}
                onChange={e => {
                  this.throwerChange(e.target.value);
                }}
              />
              {`${name}   `}
            </label>
          ))}

          {this.state.thrower && (
            <div
              style={{
                marginLeft: 20,
                paddingTop: 10,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              <span
                style={{ marginRight: this.getX(0.1) }}
              >{`Score: ${this.state.score}`}</span>
              Wind:
              <input
                type="range"
                min="-20"
                max="20"
                value={this.state.wind}
                step="0.01"
                style={{ width: this.getX(0.4), marginLeft: 10 }}
                onChange={e => this.setState({ wind: e.target.value })}
              />
              <button
                style={{
                  marginLeft: 50,
                  width: this.getX(0.1),
                  height: this.getY(0.04),
                }}
                type="button"
                onClick={this.handleThrow}
              >
                {`${this.state.throwInProcess ? "Restart" : "Rucaj!"}`}{" "}
                <small>(double click)</small>
              </button>
            </div>
          )}
        </div>
        <Stage
          width={this.state.width}
          height={this.state.height}
          fill="blue"
          style={{ marginTop: -20, marginLeft: -20 }}
          onDblClick={this.handleThrow}
        >
          <Layer>
            {/* Background */}
            {this.background()}

            {/* Message */}
            {!this.state.thrower && (
              <Text
                x={this.getX(0.25)}
                y={this.getY(0.15)}
                text="↑ Ta vyber si dakoho ↑"
                fontSize={this.getMinXY(0.07)}
                shadowBlur={10}
                shadowColor="white"
              />
            )}

            {/* Person */}
            {this.state.thrower && (
              <Person
                person={PEOPLE[this.state.thrower]}
                center={{ x: this.getX(0.5), y: this.getY(0.88) }}
              />
            )}
            {/* Arrow */}
            {this.state.thrower && !this.state.throwInProcess && (
              <>
                <Arrow
                  points={[
                    this.state.frisbeePosition.x,
                    this.state.frisbeePosition.y,
                    this.state.arrowPosition.x,
                    this.state.arrowPosition.y,
                  ]}
                  stroke="black"
                  strokeWidth={3}
                  fill="black"
                  shadowBlur={3}
                  shadowColor="white"
                />
                <Circle
                  x={this.state.arrowPosition.x}
                  y={this.state.arrowPosition.y}
                  radius={this.state.width}
                  // stroke="black"
                  draggable
                  dragBoundFunc={pos => {
                    const radius = this.getMinXY(0.25);
                    var scale = radius / dist(this.state.frisbeePosition, pos);
                    if (scale < 1) {
                      return {
                        x:
                          (pos.x - this.state.frisbeePosition.x) * scale +
                          this.state.frisbeePosition.x,
                        y: Math.min(
                          this.getY(0.88),
                          (pos.y - this.state.frisbeePosition.y) * scale +
                            this.state.frisbeePosition.y
                        ),
                      };
                    }
                    return {
                      x: pos.x,
                      y: Math.min(pos.y, this.getY(0.88)),
                    };
                  }}
                  onDragMove={e => {
                    this.setState({
                      arrowPosition: e.target._lastPos,
                    });
                  }}
                />
              </>
            )}
            {/* Bareers */}
            {this.state.thrower && (
              <>
                <Line
                  points={[
                    this.getX(0.2),
                    this.getY(0.3),
                    this.getX(0.2),
                    this.getY(0.9),
                  ]}
                  strokeWidth={20}
                  stroke="black"
                  shadowBlur={2}
                  poin
                />

                <Line
                  points={[
                    this.getX(0.8),
                    this.getY(0.3),
                    this.getX(0.8),
                    this.getY(0.6),
                  ]}
                  strokeWidth={20}
                  stroke="black"
                  shadowBlur={2}
                />

                <Line
                  points={[
                    this.getX(0.4),
                    this.getY(0.2),
                    this.getX(0.6),
                    this.getY(0.2),
                  ]}
                  strokeWidth={20}
                  stroke="black"
                  shadowBlur={2}
                />
              </>
            )}

            {/* Targets */}
            {this.state.thrower &&
              TARGETS.map(({ key, xScale, yScale, value, peopleHit }) => (
                <>
                  <Text
                    key={key + "1"}
                    x={this.getX(xScale) - this.getMinXY(0.01)}
                    y={this.getY(yScale) - this.getMinXY(0.02) - 20}
                    text={`${
                      PEOPLE[this.state.thrower].targetsHit.includes(key)
                        ? 0
                        : (peopleHit + 1) * value
                    }`}
                    fontStyle="bold"
                    fontSize={20}
                    shadowBlur={5}
                    shadowColor="white"
                  />
                  <Circle
                    key={key + "2"}
                    x={this.getX(xScale)}
                    y={this.getY(yScale)}
                    radius={this.getMinXY(0.015)}
                    fill="red"
                    stroke="black"
                    strokeWidth={3}
                  />
                  <Circle
                    key={key + "3"}
                    x={this.getX(xScale)}
                    y={this.getY(yScale)}
                    radius={this.getMinXY(0.003)}
                    fill="black"
                    stroke="black"
                    strokeWidth={3}
                  />
                </>
              ))}
            {/* Frisbee */}
            {this.state.thrower && this.frisbee()}
          </Layer>
        </Stage>
      </>
    );
  }
}

export default KefearSimulator;
