import dynamic from 'next/dynamic'
import Head from 'next/head'
import code from '../components/Code'
import CustomLink from '../components/CustomLink'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
export default {
  a: CustomLink,
  TestComponent: dynamic(() => import('../components/TestComponent')),
  Head,
  code: code,
}