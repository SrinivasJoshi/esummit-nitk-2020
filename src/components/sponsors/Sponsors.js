import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import ibhubsImageSrc from "images/logo-ibhubs.jpg";
import jamboreeImageSrc from "images/logo-jamboree.png";
import d2cImageSrc from "images/logo-d2c.png";
import startupNewsImageSrc from "images/logo-startupnews.png";
import socialShiftersImageSrc from "images/logo-socialshifters.png";
import finotizeImageSrc from "images/logo-finotize.png";
import kvcImageSrc from "images/logo-kvc.png";
import ctmImageSrc from "images/logo-ctm.png";
import mywaysImageSrc from "images/logo-myways.png";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center `}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500  duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Meet Our Sponsors and Partners!",
  subheading = "The lovely people behind us",
  imageHref = "https://ibhubs.co/",
  description = "",
  cards = [
    {
      imageSrc: ibhubsImageSrc,
      position: "Knowledge Partner",
      imageHref: "https://ibhubs.co/",
      name: "iB HUBS",
      links: [
        /*
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },*/
      ],
    },
    {
      imageSrc: d2cImageSrc,
      position: "Online Hosting Partner",
      name: "Dare 2 Compete",
      imageHref: "https://dare2compete.com/",
      links: [
        /*
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },*/
      ],
    },
    {
      imageSrc: jamboreeImageSrc,
      position: "Education Partner",
      name: "Jamboree",
      imageHref: "https://www.jamboreeindia.com/",
      links: [/*
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },*/
      ],
    },
    {
      imageSrc: startupNewsImageSrc,
      position: "Online Media Partner",
      name: "Startupnews.fyi",
      imageHref: "https://www.startupnews.fyi/",
      links: [/*
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },*/
      ],
    },
    {
      imageSrc: socialShiftersImageSrc,
      position: "Social Entrepreneurship Partners",
      name: "Social Shifters",
      imageHref: "https://socialshifters.co/",
      links: [/*
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },*/
      ],
    },
    {
    imageSrc: finotizeImageSrc,
      position: "Legal Partner",
      name: "Finotize",
      imageHref: "https://www.finotize.com/",
      links: [
        /*
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },*/
      ],
    },
    {
    imageSrc: kvcImageSrc,
      position: "Venture Capital Partner",
      name: "Kindle Ventures Capital",
      imageHref: "https://www.kindlevc.com/",
      links: [
        /*
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },*/
      ],
    },
    {
      imageSrc: ctmImageSrc,
        position: "Youth Partner",
        name: "Campus Times Pune",
        imageHref: "https://www.campustimespune.com/",
        links: [
          /*
          {
            url: "https://twitter.com",
            icon: TwitterIcon,
          },
          {
            url: "https://linkedin.com",
            icon: LinkedinIcon,
          },
          {
            url: "https://github.com",
            icon: GithubIcon,
          },*/
        ],
      },
      {
        imageSrc: mywaysImageSrc,
          position: "Career Growth Partner",
          name: "MyWays",
          imageHref: "https://www.myways.in/",
          links: [
            /*
            {
              url: "https://twitter.com",
              icon: TwitterIcon,
            },
            {
              url: "https://linkedin.com",
              icon: LinkedinIcon,
            },
            {
              url: "https://github.com",
              icon: GithubIcon,
            },*/
          ],
        },
    /*
    {
      imageSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      position: "Lead Developer",
      name: "Himali Turn",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Sr. Developer",
      name: "Troye Sivan",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Quality Assurance",
      name: "Holo Wo",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },*/
  ]
}) => {
    return (
      <Container>
        <ContentWithPaddingXl>
          <HeadingContainer>
            {subheading && <Subheading style={{ color: "#000" }}>{subheading}</Subheading>}
            {heading && <Heading style={{ color: "#0762b0" }}>{heading}</Heading>}
            {description && <Description>{description}</Description>}
          </HeadingContainer>
          <Cards>
            {cards.map((card, index) => (
              <Card key={index}>
                <a href= {card.imageHref} target="_blank"><CardImage style={{backgroundRepeat: "no-repeat"}} imageSrc={card.imageSrc} /></a>
                
                <CardContent>
                  <span className="position" style={{ color: "#0762b0" }}>{card.position}</span>
                  <span className="name">{card.name}</span>
                  <CardLinks>
                    {card.links.map((link, linkIndex) => (
                      <a key={linkIndex} className="link" href={link.url}>
                        <link.icon className="icon" />
                      </a>
                    ))}
                  </CardLinks>
                </CardContent>
              </Card>
            ))}
          </Cards>
        </ContentWithPaddingXl>
      </Container>
    );
  };
