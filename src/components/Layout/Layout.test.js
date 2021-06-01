import { render, screen, fireEvent, within } from '@testing-library/react';
import Layout from './Layout';

const mockedArticleTitle = 'Watch live: NASA to conduct historic first all-female spacewalk - Washington Post';

const findFirstArticle = () => screen.findByText(mockedArticleTitle);


test('The news are displayed', async () => {
    render(<Layout />);

    const article = await findFirstArticle();

    const detailsBox = screen.queryByTestId('details-box');
    expect(detailsBox).not.toBeInTheDocument();

    expect(article).toBeInTheDocument();
});

test('Show display the details of the selected article', async () => {
    render(<Layout />);

    const article = await findFirstArticle();
    fireEvent.click(article, new MouseEvent('click'));

    const detailsBox = screen.getByTestId('details-box');
    expect(detailsBox).toBeInTheDocument();

    const { getByText } = within(detailsBox);
    const detailedArticle = getByText(mockedArticleTitle)
    expect(detailedArticle).toBeInTheDocument();
});
