import { render } from '@testing-library/react'
import OrganizationDrawer from '../organizationDrawer'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../../state/store'

jest.mock('../../api/users')

describe('OrganizationDrawer', () => {
  const mockOnClose = jest.fn()

  it('renders OrganizationDrawer with data from useGetUserByIdQuery', () => {
    const { debug } = render(
      <ReduxProvider store={store}>
        <OrganizationDrawer
          onClose={mockOnClose}
          selectedOrganization={1}
          visible={true}
        />
      </ReduxProvider>
    )

    console.log(debug())
  })
})
