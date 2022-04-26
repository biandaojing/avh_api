# coding: utf-8

"""
    Arm API

    REST API to manage your virtual devices.  # noqa: E501

    The version of the OpenAPI document: 1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import avh_api_async
from avh_api_async.models.instance_console_endpoint import InstanceConsoleEndpoint  # noqa: E501
from avh_api_async.rest import ApiException

class TestInstanceConsoleEndpoint(unittest.TestCase):
    """InstanceConsoleEndpoint unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test InstanceConsoleEndpoint
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = avh_api_async.models.instance_console_endpoint.InstanceConsoleEndpoint()  # noqa: E501
        if include_optional :
            return InstanceConsoleEndpoint(
                url = ''
            )
        else :
            return InstanceConsoleEndpoint(
        )

    def testInstanceConsoleEndpoint(self):
        """Test InstanceConsoleEndpoint"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
