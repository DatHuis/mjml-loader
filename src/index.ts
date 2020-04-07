/**
 * @author Philipp Beau <philipp@dathuis.nl>
 *
 */

import mjml2html from 'mjml';

type TBD = {
  cacheable: () => void;
  resourcePath: string;
  query: object;
};

export default function mjmlLoader(this: TBD, content: string) {
  this.cacheable();

  const splitPath = this.resourcePath.split('/');
  splitPath.pop();
  const filePath = splitPath.join('/');
  const options = { filePath, ...this.query };

  const result = mjml2html(content, options);

  if (result.errors.length) {
    const errorMsg = `[@dathuis/mjml-loader] ERROR in ${
      this.resourcePath
    }:\n${result.errors
      .map(error => `- ${error.formattedMessage}`)
      .join('\n')}`;
    throw Error(errorMsg);
  }

  return `export default ${JSON.stringify(result.html)};`;
}
