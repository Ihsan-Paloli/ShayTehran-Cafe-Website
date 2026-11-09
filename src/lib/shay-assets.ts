import hero from "@/assets/hero-plan.webp";
import mobileHero from "@/assets/mobile-hero.webp";
import mobileHomeHero from "@/assets/mobile-home-hero.webp";
import iraniChai from "@/assets/irani-chai.webp";
import lemonTea from "@/assets/lemon-tea.webp";
import burger from "@/assets/classic-burger.webp";
import chicken from "@/assets/chicken-strips.webp";
import fries from "@/assets/loaded-fries.webp";
import storyHeroDesktop from "@/assets/story-hero-desktop.png";
import storyHeroMobile from "@/assets/story-hero-mobile.png";
import storyOneDesktop from "@/assets/story-1-desktop.webp";
import storyOneMobile from "@/assets/story-1-mobile.webp";
import storyTwoDesktop from "@/assets/story-2-desktop.webp";
import storyTwoMobile from "@/assets/story-2-mobile.webp";
import storyBackgroundDesktop from "@/assets/story-background-desktop.webp";
import storyBackgroundMobile from "@/assets/story-background-mobile.webp";
import ctaTerraceDesktop from "@/assets/cta-terrace-desktop.webp";
import ctaHostMobile from "@/assets/cta-host-mobile.webp";
import frenchFries from "@/assets/french-fries.png";
import chickenPop from "@/assets/chicken-pop.png";
import momos from "@/assets/momos.png";
import wrap from "@/assets/wrap.png";
import sandwich from "@/assets/sandwich.png";
import bunMaska from "@/assets/bun-maska.png";
import nuggets from "@/assets/nuggets.png";
import menuTeaHero from "@/assets/menu-tea-hero.webp";
import logoHero from "@/assets/logo-hero.webp";

export const assets = {
  hero,
  mobileHero: mobileHomeHero,
  storyHeroDesktop,
  storyHeroMobile,
  storyOneDesktop,
  storyOneMobile,
  storyTwoDesktop,
  storyTwoMobile,
  shayHero: hero,
  shayHeroMobile: mobileHero,
  standing: storyOneMobile,
  characterTea: storyTwoMobile,
  story: storyTwoDesktop,
  menu: storyOneDesktop,
  contactScene: storyBackgroundDesktop,
  ctaTerraceDesktop,
  ctaHostMobile,
  storyBackgroundDesktop,
  storyBackgroundMobile,
  iraniChai,
  iranianTea: iraniChai,
  lemonTea,
  tehranLemonTea: lemonTea,
  burger,
  burgerJpg: burger,
  chicken,
  chickenJpg: chicken,
  fries,
  friesJpg: fries,
  frenchFries,
  chickenPop,
  momos,
  wrap,
  sandwich,
  bunMaska,
  nuggets,
  menuTeaHero,
  logoHero,
} as const;

export const contact = {
  address: "Near Cochin International Airport, Nedumbassery, Kochi, Kerala 683111",
  hours: "Call us for today’s opening hours",
  phone: "+91 75609 94109",
  phoneHref: "tel:+917560994109",
  whatsapp: "https://wa.me/917560994109",
  email: "tehranshay@gmail.com",
  emailHref: "mailto:tehranshay@gmail.com",
  instagram: "@shay_tehran",
  instagramHref: "https://www.instagram.com/shay_tehran/?hl=en",
  directions: "https://www.google.com/maps/place/shay+tehran/data=!4m2!3m1!1s0x3b0807004f24f961:0x1c7134c34c5a6635?sa=X&ved=1t:242&ictx=111",
} as const;

export const menuSections = [
  { title: "Tehran Signature", number: "01", image: assets.iraniChai, items: [
    { name: "Irani Tea", price: "₹35" },
    { name: "Tehran Lemon Tea", price: "₹30" },
    { name: "Osmania Biscuit (3 Piece)", price: "₹10" },
  ] },
  { title: "Tehran Signature Hot Buns", number: "02", image: assets.bunMaska, items: [
    { name: "Bun Muska", price: "₹70" },
    { name: "Hazelnut", price: "₹90" },
    { name: "Pistachio", price: "₹90" },
    { name: "Malai Bun", price: "₹100" },
  ] },
  { title: "Loaded Fries", number: "03", image: assets.fries, items: [
    { name: "Normal", price: "₹220" },
    { name: "Mexican", price: "₹230" },
    { name: "Veg", price: "₹160" },
  ] },
  { title: "Burger", number: "04", image: assets.burger, items: [
    { name: "Classic Burger", price: "₹160" },
    { name: "Zinger Burger", price: "₹170" },
    { name: "Veg Burger", price: "₹150" },
  ] },
  { title: "Sandwich", number: "05", image: assets.sandwich, items: [
    { name: "Chicken Club Sandwich", price: "₹220" },
    { name: "Veg Sandwich", price: "₹180" },
  ] },
  { title: "Wraps", number: "06", image: assets.wrap, items: [
    { name: "Wrap Normal", price: "₹150" },
    { name: "Quesadilla Wrap", price: "₹160" },
  ] },
  { title: "Momos (Chicken)", number: "07", image: assets.momos, items: [
    { name: "Fried Momos", price: "₹150" },
    { name: "Steamed Momos", price: "₹150" },
    { name: "Veg Momos", price: "₹130" },
  ] },
  { title: "Chicken Pop", number: "08", image: assets.chickenPop, items: [
    { name: "Chicken Pop (5 Piece)", price: "₹140" },
  ] },
  { title: "Nuggets", number: "09", image: assets.nuggets, items: [
    { name: "Nuggets 6 Piece", price: "₹140" },
  ] },
  { title: "French Fries", number: "10", image: assets.frenchFries, items: [
    { name: "Regular", price: "₹90" },
    { name: "Large", price: "₹160" },
    { name: "Peri Peri Fries", price: "₹180" },
    { name: "Masala Fries", price: "₹180" },
  ] },
  { title: "Combo Plates", number: "11", image: assets.chicken, items: [
    { name: "Strips Normal (3 Pcs)", price: "₹170" },
    { name: "Strips Mexican (3 Pcs)", price: "₹180" },
    { name: "Wings Normal (6 Pcs)", price: "₹170" },
    { name: "Wings Mexican (6 Pcs)", price: "₹180" },
  ] },
] as const;