import React from 'react'
import { GiSparkles } from 'react-icons/gi'

export const links = [
  {
    id: 1,
    text: 'home',
    page: 'home',
    url: '/',
    links: [],
  },
  {
    id: 2,
    text: 'about',
    page: 'about',
    url: '/about',
    links: [],
  },
  {
    id: 3,
    text: 'shop',
    page: 'shop',
    url: '/shop',
    links: [],
  },
]

export const services = [
  {
    id: 1,
    icon: <GiSparkles />,
    title: 'SPF',
    text:
      'For UVA protection, use an SPF that contains Zinc Oxide or Titanium Dioxide.',
  },
  {
    id: 2,
    icon: <GiSparkles />,
    title: 'Thinnest to Thickest',
    text:
      'Apply your products thinnest to thickest for maximum absorption. Toners & serums go before moisturizer & SPF.',
  },
  {
    id: 3,
    icon: <GiSparkles />,
    title: 'Exfoliation',
    text: 'Be gentle. Follow with a moisturzer. Be consistent!',
  },
]

export const shopTypes = [
  {
    id: 1,
    icon: <GiSparkles />,
    title: 'Skin Type',
    url: '/shop/skin-type',
    text: 'to shop Michele Corley Clinical Skincare by skin type.',
  },
  {
    id: 2,
    icon: <GiSparkles />,
    url: '/shop/category',
    title: 'Category',
    text: 'to shop Michele Corley Clinical Skincare by product category.',
  },
  {
    id: 3,
    icon: <GiSparkles />,
    title: 'Advanced Filter',
    url: '/shop',
    text: 'to shop by skin condition, product type, price, & sales.',
  },
]
