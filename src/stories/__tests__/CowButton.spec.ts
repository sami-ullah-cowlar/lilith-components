import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CowButton from "@/stories/atoms/button/CowButton.vue";

describe("Button", () => {
  it("does exist", () => {
    const wrapper = mount(CowButton);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Button Variants", () => {
  it("Should return 'Button' label by default", () => {
    const wrapper = mount(CowButton);
    expect(wrapper.text()).toBe("Button");
    expect(wrapper.classes()).toContain("cow-button-default");
  });

  it("Should update button's label", () => {
    const wrapper = mount(CowButton, { props: { label: "updated label" } });
    expect(wrapper.text()).toBe("updated label");
  });

  it("Should update button's background color", () => {
    const wrapper = mount(CowButton, { props: { additionalStyles: { backgroundColor: "red" } } });
    expect((wrapper.element as HTMLElement).style.backgroundColor).toBe("red");
  });

  it("Should update button's text color", () => {
    const wrapper = mount(CowButton, { props: { additionalStyles: { color: "blue" } } });
    expect((wrapper.element as HTMLElement).style.color).toBe("blue");
  });

  it("Should add border to the button", () => {
    const wrapper = mount(CowButton, { props: { additionalStyles: { borderColor: "blue" } } });
    expect((wrapper.element as HTMLElement).style.borderColor).toBe("blue");
  });

  it("Should make button text uppercase", () => {
    const wrapper = mount(CowButton, { props: { additionalStyles: { textTransform: "uppercase" } } });
    expect(window.getComputedStyle(wrapper.element as HTMLElement).getPropertyValue("text-transform")).toBe(
      "uppercase",
    );
  });

  it("Should update the font weight of button", () => {
    const wrapper = mount(CowButton, { props: { additionalStyles: { fontWeight: "900" } } });
    expect(window.getComputedStyle(wrapper.element as HTMLElement).getPropertyValue("font-weight")).toBe("900");
  });

  it("Should add opacity to button", () => {
    const wrapper = mount(CowButton, { props: { additionalStyles: { opacity: 0.6 } } });
    expect(window.getComputedStyle(wrapper.element as HTMLElement).getPropertyValue("opacity")).toBe("0.6");
  });

  it("Should add class to the button that will make it outlined", () => {
    const wrapper = mount(CowButton, { props: { outline: true } });
    expect(wrapper.classes()).toContain("cow-button-outline");
  });

  it("Should add class to the button that will make it's display block", () => {
    const wrapper = mount(CowButton, { props: { block: true } });
    expect(wrapper.classes()).toContain("cow-button-block");
  });

  it("Should add loader in button", () => {
    const wrapper = mount(CowButton, { props: { loader: true } });
    const loaderWrapper = wrapper.find("[data-test-id='loader-container'");
    expect(loaderWrapper?.exists()).toBe(true);
  });

  it("Should add class to the button that will add shadow on it", () => {
    const wrapper = mount(CowButton, { props: { shadow: true } });
    expect(wrapper.classes()).toContain("cow-button-shadow");
  });

  it("Should make the button disabled", () => {
    const wrapper = mount(CowButton, { props: { disabled: true } });
    expect(wrapper.attributes().disabled).toBeDefined();
  });

  it("Should add class to the button that will change its shape <> rounded in this case", () => {
    const wrapper = mount(CowButton, { props: { rounded: "3xl" } });
    expect(wrapper.classes()).toContain("cow-button-rounded-3xl");
  });

  it("Should add class to the button that will change it's size <> lg in this case", () => {
    const wrapper = mount(CowButton, { props: { size: "lg" } });
    expect(wrapper.classes()).toContain("cow-button-lg");
  });

  it("Should trigger the click event when button is clicked", () => {
    const wrapper = mount(CowButton);
    wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
