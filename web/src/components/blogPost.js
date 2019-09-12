/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import BasePortableText from '@sanity/block-content-to-react'

// check https://github.com/sanity-io/sanity-template-gatsby-blog/blob/master/template/web/src/components/blog-post.js