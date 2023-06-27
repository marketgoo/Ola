import React from "react";
import Tag from "../Tag";
import Table from "../Table";
import TableRow from "../Table/Row";
import TableCell from "../Table/Cell";
import { storiesOf } from "@storybook/react";
import components from "./components";

const getWhereVariant = (where) => {
  const options = {
    figma: "pro",
    storybook: "chart-1",
    both: "success",
  };
  return options[where] || "";
};

const getStateVariant = (state) => {
  const options = {
    different: "warning",
    same: "success",
  };
  return options[state] || "";
};

const orderByState = (a, b) => {
  if (a.state === "same" && b.state !== "same") {
    return 1; // a va antes que b
  } else if (a.state !== "same" && b.state === "same") {
    return -1; // b va antes que a
  } else {
    return 0; // mantén el orden actual
  }
};

storiesOf("Figma", module).add("Default", () => (
  <Table>
    <thead>
      <TableRow>
        <TableCell header>Figma Label</TableCell>
        <TableCell header>Storybook Label</TableCell>
        <TableCell header>Where</TableCell>
        <TableCell header>State</TableCell>
        <TableCell header>Coment</TableCell>
      </TableRow>
    </thead>
    <tbody>
      {components.sort(orderByState).map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item["figmaLabel"]}</TableCell>
          <TableCell>
            {item["storybookLabelLink"] ? (
              <a href={`/?path=/story/${item["storybookLabelLink"]}--base`}>
                {item["storybookLabel"]}
              </a>
            ) : (
              item["storybookLabel"]
            )}
          </TableCell>
          <TableCell>
            <Tag variant={getWhereVariant(item["where"])}>{item["where"]}</Tag>
          </TableCell>
          <TableCell>
            <Tag variant={getStateVariant(item["state"])}>{item["state"]}</Tag>
          </TableCell>
          <TableCell>{item["coment"]}</TableCell>
        </TableRow>
      ))}
    </tbody>
  </Table>
));
