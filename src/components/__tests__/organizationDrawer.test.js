import { fireEvent, getByLabelText, render } from '@testing-library/react'
import OrganizationDrawer from '../organizationDrawer'

import { useGetUserByIdQuery } from '../../api/users'
jest.mock('../../api/users')

describe('OrganizationDrawer', () => {
  const mockOnClose = jest.fn()

  it('renders OrganizationDrawer with data from useGetUserByIdQuery', () => {
    useGetUserByIdQuery.mockReturnValue({
      data: {
        name: 'Test Name',
        company: {
          name: 'Test Company Name',
          catchPhrase: 'Test Catch Phrase',
        },
      },
    })

    const { getByText, getByLabelText, debug } = render(
      <OrganizationDrawer
        onClose={mockOnClose}
        selectedOrganization={1}
        visible={true}
      />
    )

    console.log(debug())

    expect(getByText(/Test Name/)).toBeTruthy()
    expect(getByText(/Test Company Name/)).toBeTruthy()
    expect(getByText(/Test Catch Phrase/)).toBeTruthy()

    fireEvent.click(getByLabelText('Close'))
    expect(mockOnClose).toHaveBeenCalled()
  })
})
